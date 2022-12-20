import { Request, Response, NextFunction } from 'express';
import posts from '../utils/posts.json'
/**
 * Get function for list blogs
 */

async function list(req: Request, res: Response, next: NextFunction) {
    res.json({ data: posts })
};

async function create(req: Request, res: Response, next: NextFunction) {
    const now = new Date();
    const newPost = {
        ...req.body.data,
        id: posts.length + 1,
        created: now,
        updated: now,
    };
    posts.push(newPost);
    console.log(newPost);
    res.status(201).json({ data: newPost})
};

module.exports = {
    list: list,
    create: create,
};
