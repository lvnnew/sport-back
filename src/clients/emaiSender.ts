import {sentenceCase} from 'change-case';
import Email from 'email-templates';
import {getOrCreateContext} from '../adm/services/context';
import {getConfig} from '../config';
import log from '../log';
import {Language} from '../types/enums';
import {File} from '../generated/graphql';

export interface EmailFile {
  name: string;
  url: string;
  mimetype: string;
}

export interface EmailOptions extends Email.EmailOptions{
  lang?: Language;
  files?: EmailFile[];
}

export interface EmailSender {
  rawSender: Email;
  send: (options: EmailOptions) => Promise<any>;
}

export const s3FileToEmailFile = (s3File: Omit<File, 'id'>):EmailFile => ({
  name: s3File.originalName,
  url: s3File.url,
  mimetype: s3File.mimetype,
});

let emailSender: EmailSender | null = null;

// const allowedEmailRecipients = [
//   'tebuchet@gmail.com',
//   'loba4ova.ekaterina@gmail.com',
//   'annykarimova@gmail.com',
//   'thth13q@gmail.com',
//   'anna.laznia@gmail.com',
//   'y.gubaydullina123@gmail.com',
//   'stella-winx-muza@mail.ru',
//   'mr.alexst@gmail.com',
//   'idcshow@yandex.ru',
//   'hyffp1@gmail.com',
//   'papka.yurii@gmail.com',
//   'olga.petrova@uzairways.com',
//   'nigora.nishanova@uzairways.com',
//   'anna.manakhova@uzairways.com',
//   'adiba.alimdjanova@uzairways.com',
//   'ben77@mail.ru',
//   'yu.ageeva3003@gmail.com',
//   'sayyora.mirkhidoyatova@uzairways.com',
//   'aurika.Krivitskaya@uzairways.com',
//   'natalya.gumenyuk@uzairways.com',
//   'plus@uzairways.com',
// ];

// const defaultRecipient = 'tebuchet@gmail.com';

export const whitelistedEmail = (email: string) => {
  // const interceptedTo = allowedEmailRecipients.includes(email.toLowerCase().trim()) ? email.toLowerCase().trim() : defaultRecipient;

  return email;
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
    log.info({
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
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      },
    });

    const send = async (options: EmailOptions) => {
      const attachments = [];
      const ctx = await getOrCreateContext();

      if (options.files) {
        for (const file of options.files) {
          attachments.push({
            filename: file.name,
            href: file.url,
            contentType: file.mimetype,
          });
        }
      }

      log.info('attachments');
      log.info(attachments);

      const to = whitelistedEmail(options.message?.to?.toString() || '').toLowerCase();
      if (!to) {
        throw new Error('Email you wish to send to should be provided');
      }

      const interceptedOptions = {
        ...options,
        template: options.template && options.lang ? `${options.template}${sentenceCase(options.lang)}` : options.template,
        message: {
          ...options.message,
          attachments,
          to,
        },
      };
      log.info(options);
      log.info(interceptedOptions);
      const templateId = options.template;
      if (!templateId) {
        throw new Error('Template should be set');
      }

      const template = await ctx.messageTemplates.get(templateId);
      if (!template) {
        throw new Error(`There is no template with "${templateId}" id`);
      }

      await rawSender.send(interceptedOptions);

      // try {
      //   if (!template.secretData && templateId !== MessageTemplate.Custom) {
      //     const emails = await ctx.emails.all({
      //       filter: {
      //         email: interceptedOptions.message.to,
      //       },
      //     });
      //     await ctx.messages.createMany(emails.map(e => ({
      //       memberId: e.memberId,
      //       subject: sent.originalMessage.subject,
      //       message: sent.originalMessage.text,
      //       templateId,
      //       secretData: false,
      //       sentToEmail: true,
      //       readedInApp: false,
      //     })));
      //   }
      // } catch (error: any) {
      //   log.error(error);
      // }

      log.info('sended');
    };

    emailSender = {
      rawSender,
      send,
    };
  }

  return emailSender;
};
