import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './../reducers';
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();

let composeTool;

if (process.env.NODE_ENV === 'development') {
  composeTool = composeWithDevTools;
} else {
    composeTool = compose;
}

const composeMiddleware = composeTool(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(reducers, composeMiddleware);
sagaMiddleware.run(rootSaga);

export default store;
