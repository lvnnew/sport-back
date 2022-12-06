import {Kafka, Message, Partitioners, Producer} from 'kafkajs';

import {configureTopics, getJobPrefix, getValidatedKafkaAsks} from './queue/utils';

type ShortMessage = Omit<Message, 'value' | 'timestamp'> & {
  value: Record<string, any>;
};

type Sender = (topic: string, messages: ShortMessage | ShortMessage[]) => ReturnType<Producer['send']>;

export type ProducerUtils = {
  sender: Sender;
  producer: Producer;
  close: () => Promise<void>;
};

export const getProducer = async (kafka: Kafka): Promise<ProducerUtils> => {
  const acks = await getValidatedKafkaAsks();

  const producer = kafka.producer({createPartitioner: Partitioners.DefaultPartitioner});

  await producer.connect();

  const sender: Sender = async (JobName, messages) => {
    const rawMessages = Array.isArray(messages) ? messages : [messages];
    const topic = configureTopics(await getJobPrefix(JobName)).main;

    if (topic.length > 255) {
      throw new Error('The maximum length of the topic title is 255 characters');
    }

    return await producer.send({
      topic,
      messages: rawMessages.map((raw) => {
        let value: Buffer | string | null = null;

        if (typeof raw.value === 'object' && !Buffer.isBuffer(raw.value)) {
          value = JSON.stringify(raw.value);
        } else if (Buffer.isBuffer(raw.value) || typeof raw.value === 'string' || raw.value === null) {
          value = raw.value;
        }

        return {
          timestamp: Date.now().toString(),
          ...raw,
          value: value as Buffer | string | null,
          headers: {
            version: '1',
            attempts: '0',
            ...raw.headers,
          },
        };
      }),
      acks,
    });
  };

  const close = () => producer.disconnect();

  return {sender, producer, close};
};
