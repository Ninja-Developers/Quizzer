
export class HttpError {
    private _message: string;
    private _code: number;
    constructor(message: string, code: number) {
        this._message = message;
        this._code = code;
    }

    get message(): string {
        return this._message;
    }

    get code(): number {
        return this._code;
    }

}