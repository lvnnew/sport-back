import {ProfileService} from './ProfileService/ProfileService';
import {SendingEmailsService} from './SendingEmails/SendingEmailsService';

export interface AdditionalServices {
  profile: ProfileService;
  sendingEmails: SendingEmailsService;
}
