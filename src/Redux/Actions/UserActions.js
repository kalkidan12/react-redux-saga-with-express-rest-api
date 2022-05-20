import {
	START_ADD_USER_SAGA,
	START_GET_USER_SAGA,
	GET_USER_OK_SAGA,
	ADD_USER_OK_SAGA,
	EDIT_USER_OK_SAGA,
	START_EDIT_USER_SAGA,
	START_DELETE_USER_SAGA,
	DELETE_USER_OK_SAGA,
	GET_TO_EDIT_USER_SAGA,
	GET_TO_DELETE_USER_SAGA,
} from "../ActionTypes/ActionTypes";
import Store from "../Store";
//actions

const addUser = (user) => {
	return { type: START_ADD_USER_SAGA, loading: true, payload: user };
};
const addUserOk = () => {
	return { type: ADD_USER_OK_SAGA, loading: false };
};

const getAlluser = () => {
	return { type: START_GET_USER_SAGA, loading: true, payload: [] };
};
const getAlluserOk = (users) => {
	return { type: GET_USER_OK_SAGA, payload: users, loading: false };
};

//edit
const getToEditUser = (user) => {
	return { type: GET_TO_EDIT_USER_SAGA, loading: true, payload: user };
};
const editUser = (user) => {
	return { type: START_EDIT_USER_SAGA, loading: true, payload: user };
};
const editUserOk = () => {
	return { type: EDIT_USER_OK_SAGA, loading: false, payload: {} };
};

//delete
const getToDeleteUser = (user) => {
	return { type: GET_TO_DELETE_USER_SAGA, loading: true, payload: user };
};
const deleteUser = (user) => {
	return { type: START_DELETE_USER_SAGA, loading: true, payload: user };
};
const deleteUserOk = () => {
	return { type: DELETE_USER_OK_SAGA, loading: false, payload: {} };
};

//dispatching the actions
//get
export const getAlluserAction = () => {
	Store.dispatch(getAlluser());
};
export const getAlluserOkAction = (users) => {
	Store.dispatch(getAlluserOk(users));
};

//add
export const addUserAction = (user) => {
	Store.dispatch(addUser(user));
};
export const addUserOKAction = () => {
	Store.dispatch(addUserOk());
};

//edit
export const getToEditUserAction = (user) => {
	Store.dispatch(getToEditUser(user));
};
export const editUserAction = (user) => {
	Store.dispatch(editUser(user));
};

export const editUserOkAction = (user) => {
	Store.dispatch(editUserOk(user));
};

//delete
export const getToDeleteUserAction = (user) => {
	Store.dispatch(getToDeleteUser(user));
};
export const deleteUserAction = (user) => {
	Store.dispatch(deleteUser(user));
};
export const deleteUserOkAction = () => {
	Store.dispatch(deleteUserOk());
};
