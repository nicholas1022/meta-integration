import { PromptObject } from "prompts";

export const questions = [
    {
      type: 'text',
      name: 'url',
      message: 'Input the API base URL',
      validate: value => {
          if (value.trim() === '') {
            return 'URL is empty';
          }
          if (!value.toLowerCase().startsWith('https://')) {            
            return 'Enforce HTTPS only';
          }
        return true;
      }
    },
    {
      type: 'text',
      name: 'urlParam',
      message: 'Input URL parameters (e.g.: id%2Cname%2Clast_name)'
    },
    {
      type: 'password',
      name: 'token',
      message: 'Input the token'
    }
  ] as PromptObject<string>[];