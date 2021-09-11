import {Request} from 'express';

export interface JWTAppPayload {
  id: bigint;
}

export interface AuthenticatedAppRequest extends Request {
  user?: JWTAppPayload;
}

export interface JWTPayload {
  id: number;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
}
