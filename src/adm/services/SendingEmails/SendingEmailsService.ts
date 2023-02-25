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

class SendingEmailsService {
  constructor(protected ctx: Context) {}

  sendEmailOnNewRegistration = async (userId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, userId: "${userId}"`);

    await addSendNewRegistrationEmailJob(
      this.ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  sendEmailOnRestorePassword = async (userId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, userId: "${userId}"`);

    await addSendRestorePasswordEmailJob(
      this.ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  sendEmailOnPasswordChange = async (userId: number, password: string) => {
    log.info(`sendEmailOnPasswordChange, userId: "${userId}"`);

    await addSendPasswordChangeEmailJob(
      this.ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  sendEmailOnResetPassword = async (userId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, userId: "${userId}"`);

    await addSendResetPasswordEmailJob(
      this.ctx,
      userId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  sendEmailDebug = async ({
    messageTemplate,
  }: SendEmailDebugArgs) => {
    switch (messageTemplate) {
    default:
      throw new Error(`Unknown ${messageTemplate} template.`);
    }
  };

  sendReportFileAsAttachment = async (email: string, file: Omit<File, 'id'>): Promise<void> => {
    log.info(`sendReportFileAsAttachment, email "${email}"`);

    const messageTemplateLangVariantId = await defineMessageTemplateLangVariantId(this.ctx, MessageTemplate.ReportFileAsAttachment);

    await addSendEmailJob({
      files: [s3FileToEmailFile(file)],
      to: email,
      messageTemplateLangVariantId,
    });
  };

  sendReportFileAsLink = async (locals: SendEmailLocals, email: string, file: Omit<File, 'id'>): Promise<void> => {
    log.info(`sendReportFileAsLink, email "${email}"`);

    const messageTemplateLangVariantId = await defineMessageTemplateLangVariantId(this.ctx, MessageTemplate.ReportFileAsLink);

    await addSendEmailJob({
      files: [s3FileToEmailFile(file)],
      to: email,
      messageTemplateLangVariantId,
      locals,
    });
  };
}

export default SendingEmailsService;
