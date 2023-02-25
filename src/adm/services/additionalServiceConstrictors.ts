import ProfileService from './ProfileService/ProfileService';
import SendingEmailsService from './SendingEmails/SendingEmailsService';
import SaveFilesService from './SaveFilesService/SaveFilesService';
import ReportsService from './Reports/ReportsService';
import EntityExporterService from './EntityExporter/EntityExporterService';
import {AdditionalServiceConstrictors} from './types';

const additionalServiceConstrictors: AdditionalServiceConstrictors = {
  profile: (ctx) => new ProfileService(ctx),
  sendingEmails: (ctx) => new SendingEmailsService(ctx),
  saveFiles: (ctx) => new SaveFilesService(ctx),
  reports: (ctx) => new ReportsService(ctx),
  entityExporter: (ctx) => new EntityExporterService(ctx),
};

export default additionalServiceConstrictors;
