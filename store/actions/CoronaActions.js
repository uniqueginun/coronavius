import { FETCH_STATS, FETCH_CONTS, FETCH_DIALY } from "../types";
import axios from "axios";

axios.defaults.baseURL = "https://covid19.mathdro.id/";

export const fetchStats = url => {
  return async dispatch => {
    const uri = url.id === `all` ? `api` : `api/countries/${url.id}`;
    const { data } = await axios.get(uri);
    data.selectedCountry = url.name;
    dispatch({ type: FETCH_STATS, payload: data });
  };
};

export const fetchConts = () => {
  return async dispatch => {
    const { data } = await axios.get("api/countries");
    dispatch({ type: FETCH_CONTS, countries: data.countries });
  };
};

export const fetchDialy = () => {
  return async dispatch => {
    const { data } = await axios.get("api/daily");
    dispatch({ type: FETCH_DIALY, dialy: data });
  };
};
