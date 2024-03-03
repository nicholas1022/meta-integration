import { ParameterError } from "./errors";

  export function checkParameter(paramName: string, paramValue: any) {
    if (paramValue == null) {
      throw new ParameterError({
        name: 'INVALID_INPUT_PARAMETER',
        message: 'Input is not defined'
      });
    }
    switch (paramName) {
      case 'url':
        if (typeof paramValue ==='string') {
          if (paramValue.trim() === '') {
            throw new ParameterError({
              name: 'INVALID_URL_ERROR',
              message: 'URL is empty'
            })
          }
          if (!paramValue.toLowerCase().startsWith('https://')) {
            throw new ParameterError({
              name: 'INVALID_URL_ERROR',
              message: 'Enforce HTTPS only'
            })
          }
        } else {
          throw new ParameterError({
            name: 'INVALID_URL_ERROR',
            message: 'URL is not string'
          })
        }
        break;
    }
  };


