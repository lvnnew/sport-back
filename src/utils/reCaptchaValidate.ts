import axios from 'axios';
import {log} from '../log';
import {getConfig} from '../config';

interface reCaptchaResponse {
  success: boolean;
  score: number;
}

async function reCaptchaValidate(token: string): Promise<boolean> {
  const {customerRecaptchaSecretKey} = await getConfig();

  try {
    const res = await axios.post<reCaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${customerRecaptchaSecretKey}&response=${token}`,
    );

    log.info(res.data);

    return res.data.success && res.data.score >= 0.9;
  } catch (error) {
    log.info(error);

    return false;
  }
}

export default reCaptchaValidate;
