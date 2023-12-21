import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseURL = 'https://it4788.catan.io.vn'

export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      await generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function postRequestJson(url, body) {
  console.log(await generateRequestHeader('json')
  )
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      await generateRequestHeader('json')
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}


export async function getRequest(url) {
  try {
    let response = await axios.get(
      baseURL + url,
      await generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function deleteRequest(url) {
  try {
    let response = await axios.delete(
      process.env.REACT_APP_BASE_URL + url,
      await generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function patchRequest(url, body) {
  try {
    let response = await axios.patch(
      process.env.REACT_APP_BASE_URL + url,
      body,
      await generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}


export const handleErrorCode = (err) => {
  console.log("Err", err);
};
export const SetStorage = async (tk) => {
  return await AsyncStorage.setItem('accessToken', JSON.stringify(tk));
};
export const GetStorage = async () => {
  return JSON.parse(await AsyncStorage.getItem('accessToken'))
}
export const RemoveStorage = async() => {
  return await AsyncStorage.removeItem('accessToken')
}
export async function generateRequestHeader(type) {
  try {
    const tk = await GetStorage();
    return {
      timeout: 5000,
      headers: {
        "Content-Type": type === "json" ? "application/json" : "multipart/form-data; charset=utf-8;",
        "Authorization": `Bearer ${tk?.token}`,
      },
    };
  } catch (error) {
    // Handle error appropriately
    console.error("Error while generating request header:", error);
    throw error;
  }
};

