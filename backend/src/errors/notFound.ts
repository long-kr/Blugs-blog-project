import { Request, Response, NextFunction } from 'express';

/**
 * Express Page Not Found handler.
 */
function notFound(req: Request, res: Response, next: NextFunction): void {
    next({ status: 404, message: `Page not found: ${req.path}` });
}

module.exports = notFound;
