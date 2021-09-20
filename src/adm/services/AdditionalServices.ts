import {Context} from './context';
import {getProfileService, ProfileService} from './ProfileService/ProfileService';
import {getSendingEmailsService, SendingEmailsService} from './SendingEmails/SendingEmailsService';

export interface AdditionalServices {
  profile: ProfileService;
  sendingEmails: SendingEmailsService;
}

export const getAdditionalServices = (getCtx: () => Context): AdditionalServices => ({
  profile: getProfileService(getCtx),
  sendingEmails: getSendingEmailsService(getCtx),
});
