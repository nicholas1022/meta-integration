import axios from "axios";
import logger from "../logger/logger";

class ApiFetch {

  public fetchUserData = async (url: string, fields: string, access_token: string) => {
    logger.verbose("Fetching user data");
    const apiUrl = `${url}${fields}&access_token=`;
    logger.verbose(`API URL: ${apiUrl}` + "${access_token}");
    try {
      const response = await axios.get(
        `${apiUrl}${access_token}`
      );
      logger.info(response.data);
      logger.verbose("Fetched user data");
    } catch  (error) {
      logger.error(error);
    }
    
  }
}
export default ApiFetch;