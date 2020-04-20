import { combineReducers } from 'redux';
import userData from './Registration/reducer';
import popup from './Popup/reducer';
import mytabs from './Tabs/reducer';
import sockets from './Socket/reducer';

export default combineReducers({
  userData,
  popup,
  mytabs,
  sockets
});
