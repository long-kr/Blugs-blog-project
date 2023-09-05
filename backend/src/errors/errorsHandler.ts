import { NextFunction, Request, Response } from 'express';

interface ResponseError extends Error {
    status?: number;
}

/**
 * Express Page response for errors
 */
function errorsHandler(
    err: ResponseError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).json({ error: message });
}

module.exports = errorsHandler;
