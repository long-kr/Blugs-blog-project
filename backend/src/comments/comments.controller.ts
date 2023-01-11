import { NextFunction, Request, Response } from "express";
import comments from "../utils/comments.json";

/**
 * Get function for list comments
 */

async function list(req: Request, res: Response, next: NextFunction) {
  res.json({ data: comments });
}

module.exports = {
  list: list,
};
