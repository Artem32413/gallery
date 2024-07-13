import axios, { AxiosResponse } from "axios";

export const fetchArtists = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    "https://test-front.framework.team/authors",
  );
  return response.data;
};

export const fetchLocations = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(
    "https://test-front.framework.team/locations",
  );
  return response.data;
};
