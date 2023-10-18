import type { NextFunction, Request, Response } from 'express';
import posts from '../utils/posts.json';

/**
 * CRUD functions
 */
async function list(req: Request, res: Response, next: NextFunction) {
  res.json({ data: posts });
}

async function read(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ data: res.locals.blog });
}

async function create(req: Request, res: Response, next: NextFunction) {
  const now = new Date();
  const newPost = {
    ...req.body.data,
    id: posts.length + 1,
    created: now,
    updated: now
  };
  posts.push(newPost);
  console.log(newPost);
  res.status(201).json({ data: newPost });
}

/**
 * Validation functions
 */
function blogExist(req: Request, res: Response, next: NextFunction) {
  const { blogId } = req.params;
  const foundBlog = posts.find(post => post.id === Number(blogId));

  if (foundBlog) {
    res.locals.blog = foundBlog;
    return next();
  }

  next({
    status: 404,
    message: `Blog id is not found: ${blogId}`
  });
}

function bodyDataHas(propertyName: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { data = {} } = req.body;

    if (data[propertyName]) {
      return next();
    }

    next({
      status: 400,
      message: `Body must include a "${propertyName}"`
    });
  };
}

function propertiesIsValid(req: Request, res: Response, next: NextFunction) {
  const { data = {} } = req.body;
  const {
    userId,
    title,
    body
  }: { userId: Number; title: string; body: string } = data;

  if (
    typeof userId !== 'number' ||
    typeof title !== 'string' ||
    typeof body !== 'string'
  ) {
    return next({
      status: 400,
      message: `Value of properties must be valid`
    });
  }

  next();
}

module.exports = {
  list: list,
  read: [blogExist, read],
  create: [
    bodyDataHas('author_id'),
    bodyDataHas('title'),
    bodyDataHas('content'),
    bodyDataHas('status'),
    create
  ]
};
