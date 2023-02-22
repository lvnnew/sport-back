import ProfileService from './ProfileService/ProfileService';
import {SendingEmailsService} from './SendingEmails/SendingEmailsService';
import {RunnersService} from './RunnersService/RunnersService';
import {EntityExporterService} from './EntityExporter/EntityExporterService';
import {SaveFileMethods} from './SaveFiles/SaveFileMethods';
import {ReportsService} from './Reports/ReportsService';

export interface AdditionalServices {
  profile: ProfileService;
  sendingEmails: SendingEmailsService;
  runnersService: RunnersService;
  entityExporter: EntityExporterService;
  saveFiles: SaveFileMethods;
  reports: ReportsService;
}
