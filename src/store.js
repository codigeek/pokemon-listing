// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import persistStore from 'reduxjs-toolkit-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist/es/constants';

// import theme reducers
import settingsReducer from 'settings/settingsSlice';
import layoutReducer from 'layout/layoutSlice';
import modalReducer from 'components/modals/modalSlice';
import langReducer from 'lang/langSlice';
import authReducer from 'auth/authSlice';
import menuReducer from 'layout/nav/main-menu/menuSlice';
import notificationReducer from 'layout/nav/notifications/notificationSlice';
import scrollspyReducer from 'components/scrollspy/scrollspySlice';

import { StuffysApi } from 'services/post';

// import persist key
import { REDUX_PERSIST_KEY } from 'config.js';

const persistConfig = {
  key: REDUX_PERSIST_KEY,
  storage,
  whitelist: ['menu', 'settings', 'lang'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer,
    layout: layoutReducer,
    modal: modalReducer,
    lang: langReducer,
    auth: authReducer,
    menu: menuReducer,
    notification: notificationReducer,
    scrollspy: scrollspyReducer,
    [StuffysApi.reducerPath] : StuffysApi.reducer
  })
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(StuffysApi.middleware),
});
const persistedStore = persistStore(store);
export { store, persistedStore };
