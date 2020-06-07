import { combineReducers } from 'redux';

import CharactersReducer from './characters';

export default combineReducers({ characters: CharactersReducer });
