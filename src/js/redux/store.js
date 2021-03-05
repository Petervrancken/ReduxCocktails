import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../redux/Cocktails';


const store = createStore(reducer,applyMiddleware(logger,thunk));
// reducer komt hier door en wordt geimporteerd op lijn 4

export default store;