import {PermissionToGraphql} from '../../permissionsToGraphql';
import SendingEmailsService from '../../../services/SendingEmails/SendingEmailsService';

const sendingEmailsPermissionToGraphql: Partial<PermissionToGraphql<SendingEmailsService>> = {
  // sendEmailOnNewRegistration: 'sendEmailOnNewRegistration',
  // sendEmailOnRestorePassword: 'sendEmailOnRestorePassword',
  // sendEmailSpyPassenger: 'sendEmailSpyPassenger',
  // sendEmailHappyNewYear2022: 'sendEmailHappyNewYear2022',
  // sendEmailChangeLevel: 'sendEmailChangeLevel',
  // sendEmailNotificationActiveToInactive: 'sendEmailNotificationActiveToInactive',
  // sendEmailNotificationExpireMiles: 'sendEmailNotificationExpireMiles',
  // sendEmailNotificationAccountDeleted: 'sendEmailNotificationAccountDeleted',
};

export default sendingEmailsPermissionToGraphql;
