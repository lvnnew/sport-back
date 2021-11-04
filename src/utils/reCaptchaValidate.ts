import axios from 'axios';
import {log} from '../log';
import {getConfig} from '../config';

interface reCaptchaResponse {
  success: boolean;
  score: number;
}

async function reCaptchaValidate(token: string): Promise<{validated: boolean; score: number;}> {
  const {customerRecaptchaSecretKey} = await getConfig();

  try {
    const res = await axios.post<reCaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${customerRecaptchaSecretKey}&response=${token}`,
    );

    log.info(res.data);
    const score = res.data.success && res.data.score || 0;

    return {
      validated: score >= 0.7,
      score,
    };
  } catch (error) {
    log.info(error);

    return {
      validated: false,
      score: 0,
    };
  }
}

export default reCaptchaValidate;
