type ErrorName = 
| 'INVALID_URL_ERROR'
| 'INVALID_INPUT_PARAMETER';

export class ParameterError extends Error {
    name: ErrorName;
    message: string;
    cause: any;

    constructor({
        name,
        message,
        cause
    }:{
        name: ErrorName;
        message: string;
        cause?: any;
    }) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}