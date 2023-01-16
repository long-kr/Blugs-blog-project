import { Request, Response, NextFunction } from "express";

/**
 * Express Page Not Found handler.
 */
function notFound(req: Request, res: Response, next: NextFunction) {
  // next({ status: 999, message: `Path not found: ${req.path}` });
  // res.status(404).send("page not found");
  res.send(`<p>page not found<p>`);
}

module.exports = notFound;
