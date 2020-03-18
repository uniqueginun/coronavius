import { FETCH_STATS, FETCH_CONTS, FETCH_DIALY } from "../types";

const intialState = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  lastUpdate: null,
  countries: [],
  selectedCntry: "",
  dialyReport: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_STATS:
      let d = new Date(Date.parse(action.payload.lastUpdate));
      return {
        ...state,
        confirmed: action.payload.confirmed,
        recovered: action.payload.recovered,
        deaths: action.payload.deaths,
        lastUpdate: d.toUTCString(),
        selectedCntry: action.payload.selectedCountry
      };
    case FETCH_CONTS:
      return {
        ...state,
        countries: objToArr(action.countries)
      };
    case FETCH_DIALY:
      return {
        ...state,
        dialyReport: action.dialy
      };
    default:
      return state;
  }
};

function objToArr(obj) {
  const countriesArray = Object.keys(obj).map(i => {
    let cntr = new Object();
    cntr["id"] = obj[i];
    cntr["name"] = i;
    return cntr;
  });
  countriesArray.unshift({ id: "all", name: "World wide" });
  return countriesArray;
}
