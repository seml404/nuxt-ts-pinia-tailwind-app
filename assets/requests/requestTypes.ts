import axios from "axios";
import qs from "qs";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

interface requestProps {
  method: string;
  url: string;
}

interface requestParams {}

export const commonRequest = (props: requestProps) => {
  const { method, url } = props;
  return axios({
    withCredentials: true,
    url,
    method,
  });
};

export const requestWithParams = (
  props: requestProps,
  params: requestParams
) => {
  const { method, url } = props;
  return axios({
    withCredentials: false,
    url,
    method,
    params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "brakets" }),
  });
};
