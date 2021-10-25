import * as api from "../api/api.js"
import {GETCOMPANIES, GETBYNAMECOMAPNY} from "../constactions/typesActions";

//Action Creators
export const getCompanies = () => async (dispatch) => {
  try {
    const data = await api.getCompanies();
    await dispatch({ type: GETCOMPANIES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetailsCompany = (nameCompany) => async (dispatch) => {
  try {
    const data = await api.getDetailsCompany(nameCompany);
    await dispatch({ type: GETBYNAMECOMAPNY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};