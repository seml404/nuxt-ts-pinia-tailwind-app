import { requestWithParams } from "./requests/requestTypes";

const baseUrl = `https://api.unsplash.com/`;
const token = `AhhJQw1G8buobhNwiu_fNIoBPxRRRgk1GU0LFD_Xp2g`;

const methods = {
  get: "GET",
  post: "POST",
  delete: "DELETE",
};

// getPhotos
const numberRequested = 30; //max number according to api documentaions
const photosUrl = `photos/random`;
const getPhotosProps = { method: methods.get, url: `${baseUrl}${photosUrl}` };
const getPhotosParams = { client_id: token, count: numberRequested };

export const apiGetPhotos = () =>
  requestWithParams(getPhotosProps, getPhotosParams);

// getAuthorDetails
const authorsDetailsUrl = `users/`;
const getAuthorDetailsProps = {
  method: methods.get,
  url: `${baseUrl}${authorsDetailsUrl}`,
};
const getAuthorDetailsParams = { client_id: token };

export const apiGetUserDetails = (authorUserName) =>
  requestWithParams(getAuthorDetailsProps, {
    ...getAuthorDetailsParams,
    username: authorUserName,
  });
