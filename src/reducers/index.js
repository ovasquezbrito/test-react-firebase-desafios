import { combineReducers } from 'redux';

import posts from './posts';
import companies from './company';
import details_company from './details_company';

export const reducers = combineReducers(
  { 
    posts, companies, details_company 
  }
)