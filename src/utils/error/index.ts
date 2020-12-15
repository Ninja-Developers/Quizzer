import { HttpError } from './error';
import { Response } from 'express';


export const errorHandler = (res: Response, error: HttpError) => {
    switch (error.code) {
        case 404:
            return
    }
}