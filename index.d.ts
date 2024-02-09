import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        sub: string;
        email: string;
        role: 'employer' | 'intern' | 'admin';
        org?: string;
      };
    }
  }
}
