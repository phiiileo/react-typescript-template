import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AppSettingsReducer from './app.settings.reducer';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';

const blacklists: any[] = [];
const persistConfig = (key: any) => ({
  key,
  storage,
  blacklist: blacklists[key],
});

const appReducer = combineReducers({
  authentication: persistReducer(persistConfig('authReducer'), authReducer),
  appSettings: persistReducer(persistConfig('appSettingsReducer'), AppSettingsReducer),
  user: persistReducer(persistConfig('userReducer'), userReducer),
});

export default appReducer;
