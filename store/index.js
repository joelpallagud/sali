import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'auth',
        'profile',
        'text'
    ]
}


const persistedReducer = persistCombineReducers(persistConfig, reducers)

export default function configureStore(initialState = {}) {
    const store = createStore(
        persistedReducer,
        {},
        applyMiddleware(thunk)
    );
    
    const persistor = persistStore(store);
    return { persistor, store };
   }
