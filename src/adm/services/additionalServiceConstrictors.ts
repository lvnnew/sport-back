import ProfileService from './ProfileService/ProfileService';
import {getSendingEmailsService} from './SendingEmails/SendingEmailsService';
import {getEntityExporterService} from './EntityExporter/EntityExporterService';
import {AdditionalServiceConstrictors} from './types';

const additionalServiceConstrictors: AdditionalServiceConstrictors = {
  profile: (ctx) => new ProfileService(ctx),
  sendingEmails: getSendingEmailsService,
  entityExporter: getEntityExporterService,
};

export default additionalServiceConstrictors;
