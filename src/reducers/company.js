import {GETCOMPANIES} from "../constactions/typesActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (companies = [], action) => {
  switch (action.type) {
    case GETCOMPANIES:
      return action.payload;
    
    default:
      return companies;
  }
};
