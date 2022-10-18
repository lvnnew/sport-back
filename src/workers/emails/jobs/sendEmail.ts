import {createContext} from '../../../adm/services/context';
import {EmailOptions, getEmailSender} from '../../../clients/emailSender';

const sendEmail = async (params: EmailOptions) => {
  const emailSender = await getEmailSender();

  const ctx = await createContext();

  return emailSender.send(ctx, params);
};

export default sendEmail;
