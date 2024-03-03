import prompts, { PromptObject } from "prompts";
import logger from "../logger/logger";

class PromptsInput {
  public async inputCallback(questions: PromptObject<string>[], callback: Function) {
    const response = await prompts(questions);
    logger.verbose("Command line input:");
    logger.verbose(response);
    callback(response);
  };
}

export default PromptsInput;

