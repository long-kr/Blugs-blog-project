import { Request, Response, NextFunction } from 'express';

/**
 * Express Page response for not allowed methods
 */
function methodNotAllowed(req: Request, res: Response, next: NextFunction) {
    next({
        status: 405,
        message: `${req.method} not allowed for ${req.originalUrl}`
    });
}

module.exports = methodNotAllowed;
