import { NextFunction, Request, Response } from "express";

const setSecurityHeaders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader(
    "Content-Security-Policy",
    "connect-src 'self' https://vercel.live https://patroarcadeserver.onrender.com"
  );
  next();
};

export { setSecurityHeaders };