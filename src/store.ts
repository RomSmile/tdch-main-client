import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

let initialState;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>
