import { NextFunction, Request, Response } from "express";

interface Props {
	delegate: (req: Request, res: Response, next: NextFunction) => void;
	defaultStatus: string;
}

function asyncErrorBoundary({ delegate, defaultStatus }: Props) {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve()
			.then(() => delegate(req, res, next))
			.catch((error = {}) => {
				const { status = defaultStatus, message = error } = error;
				next({
					status,
					message,
				});
			});
	};
}

module.exports = asyncErrorBoundary;
