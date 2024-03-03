import dotenv from 'dotenv';
import ApiLimiter from "./limiter/api.limiter";
import logger from "./logger/logger";
import ApiFetch from "./api/api.fetch";
import PromptsInput from './prompts/prompts.input';
import { questions } from './prompts/questions/prompts.questions';
import prompts from 'prompts';
import { checkParameter } from './util/input.validate';
import { ParameterError } from './util/errors';

console.log("Facebook Integration App Start")
logger.verbose("App start");
const apiLimiter = new ApiLimiter();
const apiFetch = new ApiFetch();
const arg = process.argv[2];

dotenv.config();  
var fetchUserDataUrl = process.env.FETCH_USER_DATA_URL as string;
var urlParam = process.env.URL_PARAMETERS as string;
var accessToken = process.env.ACCESS_TOKEN as string;

if (arg && arg === "--input") { // command line input mode
  const callback = (response: prompts.Answers<string>) => {
    if (!(response)) {
      const inputError = new ParameterError({
        name: 'INVALID_INPUT_PARAMETER',
        message: 'No input parameter'
      });
      logger.error(inputError);
      throw inputError;
    }

    const fetchUserDataWithParams = () => {
      fetchUserDataUrl = response.url;
      urlParam = response.urlParam;
      accessToken = response.token;
      try {
        checkParameter('url', fetchUserDataUrl);
        checkParameter('', urlParam);
        checkParameter('', accessToken);
      } catch (error) {
        logger.error(error);
        throw error;
      }
      
      apiFetch.fetchUserData(fetchUserDataUrl, urlParam, accessToken);
    };
    apiLimiter.fetchLimit(fetchUserDataWithParams, 2000);
  }

  const promptsInput = new PromptsInput();
  promptsInput.inputCallback(questions, callback);
} else { // default .env config mode
  try {
    checkParameter('url', fetchUserDataUrl);
    checkParameter('', urlParam);
    checkParameter('', accessToken);
  } catch (error) {
    logger.error(error);
    throw error;
  }

  const fetchUserDataWithParams = () => {
    apiFetch.fetchUserData(fetchUserDataUrl, urlParam, accessToken);
  };
  
  apiLimiter.fetchLimit(fetchUserDataWithParams, 2000);
}