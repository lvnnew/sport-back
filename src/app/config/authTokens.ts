import jwt from 'jsonwebtoken';
import {getConfig} from '../../config';
import {v4 as uuid} from 'uuid';
import {createContext} from '../../adm/services/context';
import {TOKEN_EXPIRES_IN, REFRESH_TOKEN_LIVES} from './consts';

export type AuthTokens = {
  token: string;
  refreshToken: string;
};

export const destroyRefreshToken = async (token: string) => {
  const ctx = await createContext();

  const dbToken = await ctx.service('appRefreshTokens').findOne({
    filter: {
      token,
    },
  });

  if (dbToken) {
    await ctx.service('appRefreshTokens').delete({id: dbToken.id});
  }
};

export const checkAndDestroyRefreshToken = async (userId: number, token: string, ignoreExpiration = false): Promise<boolean> => {
  const ctx = await createContext();

  const dbToken = await ctx.service('appRefreshTokens').findOne({
    filter: {
      token,
      userId,
    },
  });

  if (!dbToken) {
    throw new Error('Token is invalid');
  }

  if (!ignoreExpiration && Date.now() - dbToken.create > REFRESH_TOKEN_LIVES) {
    throw new Error('Token lifetime has run out');
  }

  await ctx.service('appRefreshTokens').delete({id: dbToken.id});

  return true;
};

export const makeTokens = async (userId: number): Promise<AuthTokens> => {
  const {appJwtSecret} = await getConfig();
  if (!appJwtSecret) {
    throw new Error('appJwtSecret not proovided');
  }

  const ctx = await createContext();

  const token = jwt.sign({id: userId}, appJwtSecret, {
    expiresIn: TOKEN_EXPIRES_IN,
  });

  const refreshToken = uuid();

  ctx.service('appRefreshTokens').create({
    create: new Date(),
    token: refreshToken,
    userId,
  });

  return {
    token,
    refreshToken,
  };
};

export const getJWTMemberIdOffExpiration = async (jwtToken?: string): Promise<number | undefined> => {
  if (jwtToken) {
    const {appJwtSecret} = await getConfig();
    if (!appJwtSecret) {
      throw new Error('appJwtSecret not proovided');
    }

    const jwtPayload = jwt.verify(jwtToken, appJwtSecret, {ignoreExpiration: true});

    // Todo: check when jwtPayload type is string, I could not check
    if (typeof jwtPayload === 'object' && jwtPayload.id) {
      return Number(jwtPayload.id);
    }

    throw new Error('Token without id');
  }

  throw new Error('Failed to validate token');
};
