import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import chartDataReducer from '../reducer/chartDataReducer';

const roortReducer = combineReducers({
  chartDataReducer,
});

const store = createStore(
  roortReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof roortReducer>;

export default store;
