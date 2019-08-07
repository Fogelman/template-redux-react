import { combineReducers } from 'redux';

import auth from './auth/reducers';
import todo from './todo/reducers';

export default combineReducers({ auth, todo });
