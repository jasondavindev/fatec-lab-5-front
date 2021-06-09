import { verify } from 'jsonwebtoken';
import { Buffer } from 'buffer';

const SECRET_KEY = process.env.VUE_APP_JWT_SECRET;

export const verifyToken = (token) =>
  verify(token, Buffer.from(SECRET_KEY, 'base64'), { algorithms: ['HS512'] });
