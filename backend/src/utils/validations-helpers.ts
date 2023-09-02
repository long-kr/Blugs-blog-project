import { NextFunction, Request, Response } from 'express';
import { isIterableArray } from './common-helpers';

export const isValidFields = (fields: string[]): Function => {
    if (isIterableArray(fields)) throw Error('Invalid type of fields');

    return (req: Request, res: Response, next: NextFunction) => {
        const { body } = req;

        for (const field of fields) {
            if (!body.hasOwnProperty(field)) {
                return next({
                    status: 400,
                    message: `Field ${field} is required!`
                });
            }
        }

        for (const key of Object.keys(body)) {
            if (!fields.includes(key)) {
                return next({
                    status: 400,
                    message: `Invalid request field: ${key}`
                });
            }
        }

        next();
    };
};
