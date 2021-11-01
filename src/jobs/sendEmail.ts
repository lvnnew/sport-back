import {EmailOptions, getEmailSender} from '../clients/emaiSender';

export const sendEmail = async (params: EmailOptions) => {
  const emailSender = await getEmailSender();

  return emailSender.send(params);
};
