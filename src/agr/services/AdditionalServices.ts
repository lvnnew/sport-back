import {Context} from './context';
import {getSendingEmailsService, SendingEmailsService} from './SendingEmails/SendingEmailsService';

export interface AdditionalServices {
  sendingEmails: SendingEmailsService;
}

export const getAdditionalServices = (getCtx: () => Context): AdditionalServices => ({
  sendingEmails: getSendingEmailsService(getCtx),
});
