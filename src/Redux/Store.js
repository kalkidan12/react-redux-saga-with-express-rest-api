import { configureStore } from "@reduxjs/toolkit";
import user from "./redux/Action/user";
import users from "./redux/Action/users";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./Saga/index.js";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: {
		user,
		users,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
