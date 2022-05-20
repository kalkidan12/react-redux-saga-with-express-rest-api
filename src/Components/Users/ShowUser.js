import React from "react";
import { Text, Box, Flex, Link } from "rebass";

import { NavBar } from "../Styled/StyledRebass";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	deleteUserAction,
	getAlluserAction,
	getToDeleteUserAction,
	getToEditUserAction,
} from "../../Redux/Actions/UserActions";
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";
import { capitalizeName } from "../../Service/config";
import {
	Button,
	TableData,
	TableHead,
	TableRow,
	TableLayout,
} from "../Styled/StyledEmotion";
function ShowUser() {
	const navigateTo = useNavigate();

	const onEdit = (user) => {
		navigateTo("/adduser");
		getToEditUserAction(user);
	};
	const onDelete = (user) => {
		getToDeleteUserAction(user);
		deleteUserAction(user);
	};

	useEffect(() => {
		getAlluserAction();
	}, []);

	let users = useSelector((st) => st.users);

	const loading = useSelector((st) => st.loading);
	if (!loading) {
		users = users.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
	}
	return (
		<>
			<NavBar name="Add User" />
			{/* {loading ? (
				<Box>
					<SpinnerCircular
						color="#006887"
						enabled={loading}
						style={{
							marginLeft: "50%",
						}}
					/>
				</Box>
			) : ( */}
			<Flex
				sx={{
					maxWidth: 712,
					mx: "auto",
					px: 3,
					py: 2,
				}}
			>
				<TableLayout>
					<TableHead>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Height</th>
						<th>Edit</th>
						<th>Delete</th>
					</TableHead>
					{users.map((user) => (
						<TableRow key={user._id}>
							<TableData>{user.FirstName}</TableData>
							<TableData>{user.LastName}</TableData>
							<TableData>{user.Age}</TableData>
							<TableData>{user.Gender}</TableData>
							<TableData>{user.Height}</TableData>
							<TableData>
								<Button color="green" onClick={() => onEdit(user)}>
									Edit
								</Button>
							</TableData>
							<TableData>
								<Button color="red" onClick={() => onDelete(user)}>
									Delete
								</Button>
							</TableData>
						</TableRow>
					))}
				</TableLayout>
			</Flex>
			{/* )} */}
		</>
	);
}

export default ShowUser;
