import {addSendNewRegistrationEmailJob} from '../../../clients/queue/jobs/addSendNewRegistrationEmailJob';
import {addSendPasswordChangeEmailJob} from '../../../clients/queue/jobs/addSendPasswordChangeEmailJob';
import {addSendResetPasswordEmailJob} from '../../../clients/queue/jobs/addSendResetPasswordEmailJob';
import {addSendRestorePasswordEmailJob} from '../../../clients/queue/jobs/addSendRestorePasswordEmailJob';
import log from '../../../log';
import {Context} from '../types';

export interface SendingEmailsService {
  sendEmailOnNewRegistration: (userId: number, password: string) => Promise<void>;
  sendEmailOnRestorePassword: (userId: number, password: string) => Promise<void>;
  sendEmailOnPasswordChange: (userId: number, password: string) => Promise<void>;
  sendEmailOnResetPassword: (userId: number, password: string) => Promise<void>;
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

  return {
    sendEmailOnNewRegistration,
    sendEmailOnRestorePassword,
    sendEmailOnPasswordChange,
    sendEmailOnResetPassword,
  };
};
