import {EmailOptions, getEmailSender} from '../../../clients/emaiSender';

const sendEmail = async (params: EmailOptions) => {
  const emailSender = await getEmailSender();

  return emailSender.send(params);
};

export default sendEmail;
