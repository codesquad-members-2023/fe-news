import { API_PATH } from '../constants/api.js';

export const fetchAutoRollingData = async () => {
  return await fetch(API_PATH.auto).then((response) => response.json());
};

export const fetchMediaData = async () => {
  return await fetch(API_PATH.media).then((response) => response.json());
};

export const fetchSpecificMediaData = async (id) => {};
