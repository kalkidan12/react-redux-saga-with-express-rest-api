import { takeEvery, all, call } from "redux-saga/effects";
import {
	START_ADD_USER_SAGA,
	START_EDIT_USER_SAGA,
	START_GET_USER_SAGA,
	START_DELETE_USER_SAGA,
} from "../ActionTypes/ActionTypes";
import {
	addUserApi,
	getAlluserApi,
	editUserApi,
	deleteUserApi,
} from "../../Service/services";
import {
	addUserOKAction,
	deleteUserOkAction,
	editUserOkAction,
	getAlluserOkAction,
} from "../Actions/UserActions";

//workers
export function* getAlluserSaga() {
	try {
		const res = yield call(getAlluserApi);
		let users = res.data.Data;
		yield getAlluserOkAction(users);
	} catch (error) {
		yield console.log(error.message);
	}
}

export function* addUserSage(action) {
	const user = action.payload;
	try {
		yield call(addUserApi, user);
		yield addUserOKAction(user);
	} catch (error) {
		yield console.log(error.message);
	}
}

function* editUserSaga(action) {
	const user = action.payload;
	try {
		yield editUserApi(user);
		yield editUserOkAction();
	} catch (error) {
		yield console.log(error.message);
	}
}

function* deleteUserSaga(action) {
	const user = action.payload;
	try {
		yield deleteUserApi(user);
		yield deleteUserOkAction();
	} catch (error) {
		yield console.log(error.message);
	}
}
//watchers

export function* watchGetAllUserSaga() {
	yield takeEvery(START_GET_USER_SAGA, getAlluserSaga);
}

export function* watchAddUserSaga() {
	yield takeEvery(START_ADD_USER_SAGA, addUserSage);
}

export function* watchEditUserSaga() {
	yield takeEvery(START_EDIT_USER_SAGA, editUserSaga);
}

export function* watchDeleteUserSaga() {
	yield takeEvery(START_DELETE_USER_SAGA, deleteUserSaga);
}

//rootSage

export default function* rootSaga() {
	yield all([
		watchGetAllUserSaga(),
		watchAddUserSaga(),
		watchEditUserSaga(),
		watchDeleteUserSaga(),
	]);
}
