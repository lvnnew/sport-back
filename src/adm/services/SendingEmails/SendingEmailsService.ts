import {addSendNewRegistrationEmailJob} from '../../../clients/queue/jobs/addSendNewRegistrationEmailJob';
import {addSendPasswordChangeEmailJob} from '../../../clients/queue/jobs/addSendPasswordChangeEmailJob';
import {addSendResetPasswordEmailJob} from '../../../clients/queue/jobs/addSendResetPasswordEmailJob';
import {addSendRestorePasswordEmailJob} from '../../../clients/queue/jobs/addSendRestorePasswordEmailJob';
import {Context} from '../types';

export interface SendingEmailsService {
  sendEmailOnNewRegistration: (memberId: number, password: string) => Promise<void>;
  sendEmailOnRestorePassword: (memberId: number, password: string) => Promise<void>;
  sendEmailOnPasswordChange: (memberId: number, password: string) => Promise<void>;
  sendEmailOnResetPassword: (memberId: number, password: string) => Promise<void>;
}

export const getSendingEmailsService = (ctx: Context): SendingEmailsService => {
  const sendEmailOnNewRegistration = async (memberId: number, password: string) => {

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
