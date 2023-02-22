import ProfileService from './ProfileService/ProfileService';
import {getSendingEmailsService} from './SendingEmails/SendingEmailsService';
import {getSaveFileService} from './SaveFiles/SaveFileMethods';
import {getReportsService} from './Reports/ReportsService';
import {getEntityExporterService} from './EntityExporter/EntityExporterService';
import {AdditionalServiceConstrictors} from './types';

const additionalServiceConstrictors: AdditionalServiceConstrictors = {
  profile: (ctx) => new ProfileService(ctx),
  sendingEmails: getSendingEmailsService,
  saveFiles: getSaveFileService,
  reports: getReportsService,
  entityExporter: getEntityExporterService,
};

export default additionalServiceConstrictors;
