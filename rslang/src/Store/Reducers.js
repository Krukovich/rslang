import { combineReducers } from 'redux';
import { playZonePageReducer } from './PlayZonePage/reducers';
import { appSettings } from './Actions';

export default combineReducers({
  playZone: playZonePageReducer,
  appSettings: appSettings,
});
