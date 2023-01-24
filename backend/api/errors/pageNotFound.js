"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Express Page Not Found handler.
 */
function notFound(req, res, next) {
    // next({ status: 999, message: `Path not found: ${req.path}` });
    // res.status(404).send("page not found");
    res.send(`<p>page not found<p>`);
}
module.exports = notFound;
