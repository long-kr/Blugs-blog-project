import { NextFunction, Request, Response } from "express";
import comments from "../utils/comments.json";

/**
 * Get function for list comments
 */

async function list(req: Request, res: Response, next: NextFunction) {
	res.json({ data: comments });
}

async function create(req: Request, res: Response, next: NextFunction) {
	const now = new Date();

	const newComment = {
		...req.body.data,
		id: comments.length + 1,
		createdAt: now,
		updatedAt: now,
	};

	comments.push(newComment);

	res.status(201).json(newComment);
}

module.exports = {
	list: list,
	create: create,
};
