import React from "react";
import { Table, NavBar } from "../Styled/StyledRebass";
function ShowUser() {
	return (
		<>
			<NavBar to="/adduser" name="Add User" />
			<Table />
		</>
	);
}

export default ShowUser;
