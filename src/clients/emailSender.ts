import {sentenceCase} from 'change-case';
// import {createContext} from '../adm/services/context';
import {getConfig} from '../config';
import log from '../log';
import {File} from '../generated/graphql';
import Language from '../types/Language';
import nodemailer from 'nodemailer';
import fs from 'fs-jetpack';
import path from 'path';
import {MessageTemplate} from '../types/enums';
import renderEmailFromTemplateData from './renderEmailFromTemplateData';

export interface EmailFile {
  name: string;
  url: string;
  mimetype: string;
}

export interface EmailOptions {
  lang?: Language;
  files?: EmailFile[];
  message: {to: string},
  template: MessageTemplate,
  locals?: Record<string, any>,
  // priority?: number;
}

export interface EmailSender {
  send: (options: EmailOptions) => Promise<any>;
}

export const s3FileToEmailFile = (s3File: Omit<File, 'id'>):EmailFile => ({
  name: s3File.originalName,
  url: s3File.url,
  mimetype: s3File.mimetype,
});

let send: (options: EmailOptions) => Promise<any>;

export const getEmailSender = async () => {
  if (!send) {
    const config = await getConfig();
    if (!config.smtpHost || !config.smtpPort || !config.smtpUser || !config.smtpPass) {
      throw new Error('smtp creads is not provided');
    }

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: Number.parseInt(config.smtpPort, 10),
      secure: false,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    send = async (options: EmailOptions) => {
      const attachments = [];
      // const ctx = await createContext();

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
      log.info(JSON.stringify(attachments, null, 1));

      const to = options.message.to.toLowerCase();
      if (!to) {
        throw new Error('Email you wish to send to should be provided');
      }

      const templateName = options.template && options.lang ? `${options.template}${sentenceCase(options.lang)}` : options.template;
      if (!templateName) {
        throw new Error('Template name must be specified');
      }

      const subjectTemplate = fs.read(path.join(fs.cwd(), 'emails', templateName, 'subject.pug'));
      if (!subjectTemplate) {
        throw new Error('Subject template is not specified');
      }

      const htmlTemplate = fs.read(path.join(fs.cwd(), 'emails', templateName, 'html.pug'));
      if (!htmlTemplate) {
        throw new Error('Html template is not specified');
      }

      log.info('options');
      log.info(JSON.stringify(options, null, 1));

      const templateId = options.template;
      if (!templateId) {
        throw new Error('Template should be set');
      }

      // const template = await ctx.service('messageTemplates').get(templateId);
      // if (!template) {
      //   throw new Error(`There is no template with "${templateId}" id`);
      // }

      const messageFromTemplate = await renderEmailFromTemplateData({
        subjectTemplate,
        bodyTemplate: htmlTemplate,
        locals: options.locals,
      });

      const message = {
        ...messageFromTemplate,
        from: config.smtpFrom,
        to,
        attachments,
      };

      // await previewEmail(message);

      const messageSent = await transporter.sendMail(message);
      log.info('messageSent');
      log.info(JSON.stringify(messageSent, null, 1));

      log.info('sent');
    };
  }

  return {send};
};
