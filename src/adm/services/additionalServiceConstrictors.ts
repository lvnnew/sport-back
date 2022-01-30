import {getProfileService} from './ProfileService/ProfileService';
import {getSendingEmailsService} from './SendingEmails/SendingEmailsService';
import {AdditionalServiceConstrictors} from './types';

const additionalServiceConstrictors: AdditionalServiceConstrictors = {
  profile: getProfileService,
  sendingEmails: getSendingEmailsService,
};

export default additionalServiceConstrictors;
