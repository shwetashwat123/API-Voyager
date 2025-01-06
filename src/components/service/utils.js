import axios from "axios";
import { getHeadersandParams } from "../utils/checkParams";

const getData = async (formData, headerData, paramData, jsonText) => {
  const apiType = formData.type.toLowerCase();
  const apiURL = formData.url;
  const apiHeaders = getHeadersandParams(headerData)
  const apiParams = getHeadersandParams(paramData)

  try {

    return await axios({
      method: apiType,
      url: apiURL,
      body: jsonText,
      headers: apiHeaders,
      params: apiParams
    })
  }
  catch (error) {
    console.log("Error while calling getData API", error)
    return 'error';
  }

}

export default getData;