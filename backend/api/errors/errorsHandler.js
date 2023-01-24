"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Express Page response for errors
 */
function errorsHandler(err, req, res, next) {
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(status).json({ error: message });
}
module.exports = errorsHandler;
