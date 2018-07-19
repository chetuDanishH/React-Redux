import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from '../sagas';
import reducers from '../reducers';

/** create saga middleware */
const sagaMiddleware = createSagaMiddleware()

/** creating store by combining the reducers and the sagas with the redux dev tools for the browser */
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

/** Mapped all root saga to the saga middleware */
sagaMiddleware.run(rootSagas)

export default store;
