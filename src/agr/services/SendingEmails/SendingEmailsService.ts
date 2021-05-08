/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {addSendNewRegistrationEmailJob} from '../../../clients/queue/jobs/addSendNewRegistrationEmailJob';
import {addSendPasswordChangeEmailJob} from '../../../clients/queue/jobs/addSendPasswordChangeEmailJob';
import {addSendResetPasswordEmailJob} from '../../../clients/queue/jobs/addSendResetPasswordEmailJob';
import {addSendRestorePasswordEmailJob} from '../../../clients/queue/jobs/addSendRestorePasswordEmailJob';
import {addSendTransitionFromOldSystemEmailJob} from '../../../clients/queue/jobs/addSendTransitionFromOldSystemEmailJob';
import {log} from '../../../log';
import {AloyalContext} from '../context';

export interface SendingEmailsService {
  sendEmailOnNewRegistration: (memberId: number, password: string) => Promise<void>;
  sendEmailOnTransitionFromOldSystem: (memberId: number, password: string) => Promise<void>;
  sendEmailOnRestorePassword: (memberId: number, password: string) => Promise<void>;
  sendEmailOnPasswordChange: (memberId: number, password: string) => Promise<void>;
  sendEmailOnResetPassword: (memberId: number, password: string) => Promise<void>;
}

export const getSendingEmailsService = (getCtx: () => AloyalContext): SendingEmailsService => {
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

  const sendEmailOnTransitionFromOldSystem = async (memberId: number, password: string) => {
    log.info(`sendEmailOnNewRegistration, memberId: "${memberId}"`);

    const ctx = await getCtx();

    await addSendTransitionFromOldSystemEmailJob(
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

  // // Test emails

  // const sendTestEmailOnNewRegistration = async (toEmail: string) => {
  //   log.info(`sendTestEmailOnNewRegistration, toEmail: "${toEmail}"`);

  //   await addSendNewRegistrationEmailJob(
  //     toEmail,
  //     {
  //       cardNumber: 123,
  //       firstname: 'some firstname',
  //       lastname: 'some lastname',
  //       bithDate: new Date(),
  //       password: 'some password',
  //       loginUrl: 'https://ya.ru',
  //     },
  //   );
  // };

  // const sendTestEmailOnTransitionFromOldSystem = async (toEmail: string) => {
  //   log.info(`sendTestEmailOnTransitionFromOldSystem, toEmail: "${toEmail}"`);

  //   await addSendTransitionFromOldSystemEmailJob(
  //     toEmail,
  //     {
  //       cardNumber: 123,
  //       firstname: 'some firstname',
  //       lastname: 'some lastname',
  //       bithDate: new Date(),
  //       password: 'some password',
  //       loginUrl: 'https://ya.ru',
  //     },
  //   );
  // };

  // const sendTestEmailOnRestorePassword = async (toEmail: string) => {
  //   log.info(`sendTestEmailOnRestorePassword, toEmail: "${toEmail}"`);

  //   await addSendRestorePasswordEmailJob(
  //     toEmail,
  //     {
  //       cardNumber: 123,
  //       firstname: 'some firstname',
  //       lastname: 'some lastname',
  //       bithDate: new Date(),
  //       password: 'some password',
  //       loginUrl: 'https://ya.ru',
  //     },
  //   );
  // };

  // const sendTestEmailOnResetPassword = async (toEmail: string) => {
  //   log.info(`sendTestEmailOnResetPassword, toEmail: "${toEmail}"`);

  //   await addSendResetPasswordEmailJob(
  //     toEmail,
  //     {
  //       cardNumber: 123,
  //       firstname: 'some firstname',
  //       lastname: 'some lastname',
  //       bithDate: new Date(),
  //       password: 'some password',
  //       loginUrl: 'https://ya.ru',
  //     },
  //   );
  // };

  return {
    sendEmailOnNewRegistration,
    sendEmailOnTransitionFromOldSystem,
    sendEmailOnRestorePassword,
    sendEmailOnPasswordChange,
    sendEmailOnResetPassword,

    // sendTestEmailOnNewRegistration,
    // sendTestEmailOnTransitionFromOldSystem,
    // sendTestEmailOnRestorePassword,
    // sendTestEmailOnResetPassword,
  };
};
