// import { createStore, applyMiddleware } from 'redux';

// export default (reducers, middlewares) => {
//   return createStore(reducers, applyMiddleware(...middlewares));
// };

import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
