import axios from 'axios';
import log from '../log';
import {getConfig} from '../config';

interface reCaptchaResponse {
  success: boolean;
  score: number;
}

async function reCaptchaValidate(token: string): Promise<{validated: boolean; score: number;}> {
  const {
    customerRecaptchaSecretKey,
    customerRecaptchaRequiredScore,
  } = await getConfig();

  if (
    !customerRecaptchaSecretKey ||
    !customerRecaptchaRequiredScore
  ) {
    throw new Error('There is no config for recaptcha');
  }

  try {
    const res = await axios.post<reCaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${customerRecaptchaSecretKey}&response=${token}`,
    );

    log.info(JSON.stringify(res.data, null, 1));
    const score = res.data.success && res.data.score || 0;

    return {
      validated: score >= Number.parseFloat(customerRecaptchaRequiredScore),
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
