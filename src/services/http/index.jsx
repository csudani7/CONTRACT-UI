/* eslint-disable */
import Axios from "axios";

const baseAPIUrl = process.env.REACT_APP_API_SERVER;

const axiosInitialParams = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const axios = Axios.create({
  baseURL: baseAPIUrl,
  axiosInitialParams,
});

function errorHandler(error) {
  if (!error.response) {
    return {
      response: { cors: true },
    };
  }
  if (error.response.status === 401) {
    localStorage.clear();
  }
  return error;
}

axios.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);

export const useGet = async (url, body) => {
  return await axios
    .get(url, body)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          return error.response;
        }
        return error.response.data;
      } else {
        return error.message;
      }
    });
};

export const usePost = async (url, data) => {
  return await axios
    .post(url, data)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          return error.response;
        }
        return error.response.data;
      } else {
        return error.message;
      }
    });
};

export const useDelete = async (url) => {
  return await axios
    .delete(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          return error.response;
        }
        return error.response.data;
      } else {
        return error.message;
      }
    });
};

export const usePut = async (url, data) => {
  return await axios
    .put(url, data)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          return error.response;
        }
        return error.response.data;
      } else {
        return error.message;
      }
    });
};
