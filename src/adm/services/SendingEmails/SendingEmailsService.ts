import {addSendNewRegistrationEmailJob} from '../../../clients/queue/jobs/addSendNewRegistrationEmailJob';
import {addSendPasswordChangeEmailJob} from '../../../clients/queue/jobs/addSendPasswordChangeEmailJob';
import {addSendResetPasswordEmailJob} from '../../../clients/queue/jobs/addSendResetPasswordEmailJob';
import {addSendRestorePasswordEmailJob} from '../../../clients/queue/jobs/addSendRestorePasswordEmailJob';
import {log} from '../../../log';
import {Context} from '../context';

export interface SendingEmailsService {
  sendEmailOnNewRegistration: (memberId: number, password: string) => Promise<void>;
  sendEmailOnRestorePassword: (memberId: number, password: string) => Promise<void>;
  sendEmailOnPasswordChange: (memberId: number, password: string) => Promise<void>;
  sendEmailOnResetPassword: (memberId: number, password: string) => Promise<void>;
}

export const getSendingEmailsService = (getCtx: () => Context): SendingEmailsService => {
  const sendEmailOnNewRegistration = async (memberId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, memberId: "${memberId}"`);

    const ctx = await getCtx();

    await addSendNewRegistrationEmailJob(
      ctx,
      memberId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailOnRestorePassword = async (memberId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, memberId: "${memberId}"`);

    const ctx = await getCtx();

    await addSendRestorePasswordEmailJob(
      ctx,
      memberId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailOnPasswordChange = async (memberId: number, password: string) => {
    log.info(`sendEmailOnPasswordChange, memberId: "${memberId}"`);

    const ctx = await getCtx();

    await addSendPasswordChangeEmailJob(
      ctx,
      memberId,
      {
        password,
        loginUrl: 'https://ya.ru',
      },
    );
  };

  const sendEmailOnResetPassword = async (memberId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, memberId: "${memberId}"`);

    const ctx = await getCtx();

    await addSendResetPasswordEmailJob(
      ctx,
      memberId,
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
