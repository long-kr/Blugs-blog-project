"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Express Page Not Found handler.
 */
function notFound(req, res, next) {
    next({ status: 404, message: `Page not found: ${req.path}` });
}
module.exports = notFound;
