import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./Reducer/index";

//import the watcher saga
import rootSaga from "./Saga/index";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
	userReducer,
	compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
export default Store;
