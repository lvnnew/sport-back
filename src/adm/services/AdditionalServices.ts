import ProfileService from './ProfileService/ProfileService';
import {SendingEmailsService} from './SendingEmails/SendingEmailsService';
import {EntityExporterService} from './EntityExporter/EntityExporterService';

export interface AdditionalServices {
  profile: ProfileService;
  sendingEmails: SendingEmailsService;
  entityExporter: EntityExporterService;
}
