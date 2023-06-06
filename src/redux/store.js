import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jobreducer from './reducer/jobReducer';
import availablereducer from './reducer/available';
import filterReducer from './reducer/homejobreducer';
const reducer = combineReducers({
    jobss: jobreducer,
	availablee: availablereducer,
	filter: filterReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;