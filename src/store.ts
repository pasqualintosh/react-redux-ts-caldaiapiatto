import {
  createStore,
  applyMiddleware,
  Store,
  combineReducers,
  EmptyObject,
  AnyAction,
  Dispatch,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { IAppState } from './app/type';

import WatchReducer from './domains/watches/Reducers';

const rootReducer = combineReducers<IAppState>({
  watchesState: WatchReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store<EmptyObject & IAppState, AnyAction> & {
  dispatch: Dispatch<AnyAction>;
} = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor: Persistor = persistStore(store);
