import Email from 'email-templates';
import {getConfig} from '../config';

export interface EmailSender {
  rawSender: Email;
  send: (options: Email.EmailOptions) => Promise<any>;
}

let emailSender: EmailSender | null = null;

const allowedEmailRecipients = [
  'tebuchet@gmail.com',
  'loba4ova.ekaterina@gmail.com',
  'annykarimova@gmail.com',
  'thth13q@gmail.com',
  'anna.laznia@gmail.com',
  'y.gubaydullina123@gmail.com',
  'stella-winx-muza@mail.ru',
  'mr.alexst@gmail.com',
];

const defaultRecipient = 'tebuchet@gmail.com';

export const whitelistedEmail = (email: string) => {
  const interceptedTo = allowedEmailRecipients.includes(email.trim()) ? email : defaultRecipient;

  return interceptedTo;
};

export const getEmailSender = async () => {
  if (!emailSender) {
    const config = await getConfig();

    const rawSender = new Email({
      message: {
        from: config.smtpFrom,
      },
      send: true,
      transport: {
        host: config.smtpHost,
        port: Number.parseInt(config.smtpPort, 10),
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: config.smtpUser,
          pass: config.smtpPass,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      },
    });

    const send = async (options: Email.EmailOptions) => {
      const interceptedOptions = {
        ...options,
        message: {
          ...options.message,
          to: whitelistedEmail(options.message?.to?.toString() || ''),
        },
      };
      await rawSender.send(interceptedOptions);
    };

    emailSender = {
      rawSender,
      send,
    };
  }

  return emailSender;
};
