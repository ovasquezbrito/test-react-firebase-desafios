import {GETBYNAMECOMAPNY} from "../constactions/typesActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (details_company = [], action) => {
  switch (action.type) {
    
    case GETBYNAMECOMAPNY:
      return action.payload;
    default:
      return details_company;
  }
};
