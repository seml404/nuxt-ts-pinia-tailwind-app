import { requestWithParams } from "./requests/requestTypes";

const baseUrl = `https://api.unsplash.com/`;
const token = `AhhJQw1G8buobhNwiu_fNIoBPxRRRgk1GU0LFD_Xp2g`;

const methods = {
  get: "GET",
  post: "POST",
  delete: "DELETE",
};

// getPhotos
const numberRequested = 30;
const photosUrl = `photos/random`;
const getPhotosProps = { method: methods.get, url: `${baseUrl}${photosUrl}` };
const getPhotosParams = { client_id: token, count: numberRequested };

export const apiGetPhotos = () =>
  requestWithParams(getPhotosProps, getPhotosParams);
