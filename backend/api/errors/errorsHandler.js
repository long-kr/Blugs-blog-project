"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorsHandler(err, req, res, next) {
    const { message = "Something went wrong!", status = 500 } = err;
    res.status(status).json({ error: message });
}
module.exports = errorsHandler;
