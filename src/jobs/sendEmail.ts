import {log} from '../log';
import {getEmailSender} from '../clients/emaiSender';

export const sendEmail = async (payload: any) => {
  log.info('payload');
  log.info(payload);
  const emailSender = await getEmailSender();
  if (payload.template) {
    const result = await emailSender
      .send({
        template: payload.template,
        message: {
          to: payload.to,
        },
        locals: payload.locals,
      });

    log.info(result);
  } else {
    log.error('There is no template');
  }
};
