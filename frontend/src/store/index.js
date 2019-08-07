import persistReducers from './persist';
import { persistStore } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import createStore from './createStore';
// import rootReducers from './modules/allReducers';
// import rootSaga from './modules/allSagas';

// const sagaMiddleware = createSagaMiddleware({null});
// const middlewares = [sagaMiddleware];

// const store = createStore(persistReducers(rootReducers), middlewares);
// const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);

// export { store, persistor };

import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootReducers from './modules/allReducers';
import rootSaga from './modules/allSagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
