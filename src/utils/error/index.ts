import { HttpError } from './error';


export const errorHandler = (error: HttpError) => {
    switch(error.code){
        case 404:
            return
    }
}