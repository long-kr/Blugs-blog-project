import { Request, Response, NextFunction } from 'express';
import posts from '../utils/posts.json'
/**
 * Get function for list blogs
 */

async function list(req: Request, res: Response, next: NextFunction) {
    res.json({ data: posts })
};

module.exports = {
    list: list,
};
