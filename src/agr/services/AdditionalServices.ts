import {AgrContext} from './context';
import {getSendingEmailsService, SendingEmailsService} from './SendingEmails/SendingEmailsService';

export interface AdditionalServices {
  sendingEmails: SendingEmailsService;
}

export const getAdditionalServices = (getCtx: () => AgrContext): AdditionalServices => ({
  sendingEmails: getSendingEmailsService(getCtx),
});
