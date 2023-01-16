import { NextFunction, Request, Response } from "express";

interface ResponseError extends Error {
  status?: number;
}

function errorsHandler(
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { message = "Something went wrong!", status = 500 } = err;
  res.status(status).json({ error: message });
}

module.exports = errorsHandler;
