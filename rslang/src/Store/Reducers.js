import { combineReducers } from 'redux';
import { playZonePageReducer } from './PlayZonePage/reducers';

export default combineReducers({
  playZonePage: playZonePageReducer,
});
