import { HttpError } from './error';
import { Response } from 'express';

export const errorHandler = (res: Response, error: HttpError) => {
    if (!(error instanceof HttpError)) {
        return res.status(500).send("internal Server Error")
    }
    return res.status(error.code).send(error.message);
}