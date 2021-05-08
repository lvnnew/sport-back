import {Request} from 'express';

export interface JWTPayload {
  id: number;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;

  // userLogin?: AppLogin;
}
