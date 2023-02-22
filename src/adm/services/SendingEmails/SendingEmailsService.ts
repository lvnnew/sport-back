import {addSendEmailJob, SendEmailLocals} from '../../../clients/queue/jobs/addSendEmailJob';
import {addSendNewRegistrationEmailJob} from '../../../clients/queue/jobs/addSendNewRegistrationEmailJob';
import {addSendPasswordChangeEmailJob} from '../../../clients/queue/jobs/addSendPasswordChangeEmailJob';
import {addSendResetPasswordEmailJob} from '../../../clients/queue/jobs/addSendResetPasswordEmailJob';
import {addSendRestorePasswordEmailJob} from '../../../clients/queue/jobs/addSendRestorePasswordEmailJob';
import log from '../../../log';
import {Context} from '../types';
import {MessageTemplate} from '../../../types/enums';
import {File} from '../../../generated/graphql';
import {s3FileToEmailFile} from '../../../clients/emailSender';
import defineMessageTemplateLangVariantId from '../MessageTemplatesService/defineMessageTemplateLangVariantId';

interface SendEmailDebugArgs {
  messageTemplate: string,
  locals: SendEmailLocals,
}

export interface SendingEmailsService {
  sendEmailOnNewRegistration: (userId: number, password: string) => Promise<void>;
  sendEmailOnRestorePassword: (userId: number, password: string) => Promise<void>;
  sendEmailOnPasswordChange: (userId: number, password: string) => Promise<void>;
  sendEmailOnResetPassword: (userId: number, password: string) => Promise<void>;
  sendEmailDebug: (params: SendEmailDebugArgs) => Promise<void>;
  sendReportFileAsAttachment: (email: string, file: Omit<File, 'id'>) => Promise<void>;
  sendReportFileAsLink: (locals: SendEmailLocals, email: string, file: Omit<File, 'id'>) => Promise<void>;
}

export const getSendingEmailsService = (ctx: Context): SendingEmailsService => {
  const sendEmailOnNewRegistration = async (userId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, userId: "${userId}"`);

    await addSendNewRegistrationEmailJob(
      ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailOnRestorePassword = async (userId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, userId: "${userId}"`);

    await addSendRestorePasswordEmailJob(
      ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailOnPasswordChange = async (userId: number, password: string) => {
    log.info(`sendEmailOnPasswordChange, userId: "${userId}"`);

    await addSendPasswordChangeEmailJob(
      ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailOnResetPassword = async (userId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, userId: "${userId}"`);

    await addSendResetPasswordEmailJob(
      ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailDebug = async ({
    messageTemplate,
  }: SendEmailDebugArgs) => {
    switch (messageTemplate) {
    default:
      throw new Error(`Unknown ${messageTemplate} template.`);
    }
  };

  const sendReportFileAsAttachment: SendingEmailsService['sendReportFileAsAttachment'] = async (email, file) => {
    log.info(`sendReportFileAsAttachment, email "${email}"`);

    const messageTemplateLangVariantId = await defineMessageTemplateLangVariantId(ctx, MessageTemplate.ReportFileAsAttachment);

    await addSendEmailJob({
      files: [s3FileToEmailFile(file)],
      to: email,
      messageTemplateLangVariantId,
    });
  };

  const sendReportFileAsLink: SendingEmailsService['sendReportFileAsLink'] = async (locals, email, file) => {
    log.info(`sendReportFileAsLink, email "${email}"`);

    const messageTemplateLangVariantId = await defineMessageTemplateLangVariantId(ctx, MessageTemplate.ReportFileAsLink);

    await addSendEmailJob({
      files: [s3FileToEmailFile(file)],
      to: email,
      messageTemplateLangVariantId,
      locals,
    });
  };

  return {
    sendEmailDebug,
    sendReportFileAsAttachment,
    sendReportFileAsLink,
    sendEmailOnNewRegistration,
    sendEmailOnRestorePassword,
    sendEmailOnPasswordChange,
    sendEmailOnResetPassword,
  };
};
