import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseURL = 'https://it4788.catan.io.vn'

let token = null

export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function postRequestJson(url, body) {
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      generateRequestHeader('json')
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
      generateRequestHeader()
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
      generateRequestHeader()
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
      generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export const generateRequestHeader = (type) => {
  // let token = await AsyncStorage.getItem("accessToken")
  return {
    headers: {
      "Content-Type": type=="json"?"application/json":"multipart/form-data",
      "Authorization": `Bearer ${token}`, 
    },
  };
};

export const handleErrorCode = (err) => {
  console.log("Err", err);
};
export const SetStorage = async (tk) => {
    await AsyncStorage.setItem('accessToken', tk)
    token = tk
} 
export const GetStorage = async () =>{
    token =  await AsyncStorage.getItem('accessToken')
    return token
} 
export const RemoveStorage = async () =>{
  await AsyncStorage.removeItem('accessToken')
  token = null
} 

export const getToken = async ()=> token