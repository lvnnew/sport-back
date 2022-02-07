import {RequestHandler} from 'express';
import {
  AuthTokens,
  checkAndDestroyRefreshToken,
  getJWTMemberIdOffExpiration,
  makeTokens,
} from '../config/authTokens';
import log from '../../log';

export const refresh: RequestHandler<any, AuthTokens | { message: string } | { tokens: AuthTokens }, AuthTokens> = async (req, res) => {
  let message = 'Refresh failed';

  try {
    const {refreshToken, token} = req.body;
    if (!refreshToken || token) {
      res.status(400).send({message: 'Tokens is required'});
      return;
    }

    const memberId = await getJWTMemberIdOffExpiration(token);
    if (memberId && await checkAndDestroyRefreshToken(memberId, refreshToken)) {
      const tokens = await makeTokens(memberId);

      res.status(200).send({tokens});

      return;
    }
  } catch (error: any) {
    message = error.toString?.();
  }

  log.info(`Failed refresh operation with message: ${message}`);
  res.status(401).send({message});
};
