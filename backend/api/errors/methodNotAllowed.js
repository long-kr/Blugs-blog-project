"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Express Page response for not allowed methods
 */
function methodNotAllowed(req, res, next) {
    next({
        status: 405,
        message: `${req.method} not allowed for ${req.originalUrl}`,
    });
}
module.exports = methodNotAllowed;
