import { Box, Flex, Heading } from "rebass";
import { Label, Input, Radio } from "@rebass/forms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar, Form } from "../Styled/StyledRebass";
import {
	addUserAction,
	editUserAction,
	getAlluserAction,
} from "../../Redux/Actions/UserActions";
import { Button } from "../Styled/StyledEmotion";
const AddUser = () => {
	const navigateTo = useNavigate();
	const userToEdit = useSelector((state) => state.user);
	const isEditing = useSelector((state) => state.loading);

	useEffect(() => {
		isEditing && setUser(userToEdit);
	}, [isEditing, userToEdit]);

	const [user, setUser] = useState({
		FirstName: "",
		LastName: "",
		Age: "",
		Gender: "",
		Height: "",
	});

	const onChangeOfForm = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		isEditing ? editUserAction(user) : addUserAction(user);
		navigateTo("/");
		getAlluserAction();
	};

	return (
		<>
			<NavBar name={isEditing ? "Cancel Edit" : "Cancel Add"} />
			<Box
				alignItems="center"
				sx={{
					maxWidth: 512,
					mx: "auto",
					my: 3,
					px: 3,
				}}
			>
				<Box
					sx={{
						maxWidth: 512,
						mx: "auto",
						px: 3,
					}}
				>
					<Heading fontSize={[4, 5, 6]} color="black" alignItems="center">
						{isEditing ? "Edit User" : "Add User"}
					</Heading>
				</Box>

				<Box as="form" onSubmit={onSubmitHandler} py={3}>
					<Label my={2} htmlFor="email">
						First Name
					</Label>
					<Input
						id="FirstName"
						name="FirstName"
						type="name"
						placeholder="Enter First Name"
						required={isEditing ? false : true}
						value={user.FirstName}
						onChange={onChangeOfForm}
					/>
					<br></br>
					<Label my={2} htmlFor="email">
						Last Name
					</Label>
					<Input
						id="LastName"
						name="LastName"
						type="name"
						placeholder="Enter Last Name"
						required={isEditing ? false : true}
						value={user.LastName}
						onChange={onChangeOfForm}
					/>
					<br></br>
					<Label my={2} htmlFor="age">
						Age
					</Label>
					<Input
						id="age"
						name="Age"
						type="number"
						placeholder="Enter Age"
						required={isEditing ? false : true}
						value={user.Age}
						onChange={onChangeOfForm}
					/>
					<Label my={2} htmlFor="gender">
						Gender
					</Label>
					<Flex>
						<Label>
							<Radio
								name="Male"
								id="Male"
								value={user.Gender}
								onChange={(e) => {
									setUser({ ...user, Gender: "Male" });
								}}
							/>
							Male
						</Label>
						<Label>
							<Radio
								id="Female"
								name="Female"
								value={user.Gender}
								onChange={(e) => {
									setUser({ ...user, Gender: "Female" });
								}}
							/>
							Female
						</Label>
					</Flex>

					<Label my={2} htmlFor="height">
						Height
					</Label>
					<Input
						id="height"
						name="Height"
						type="number"
						placeholder="Enter Height"
						required={isEditing ? false : true}
						value={user.Height}
						onChange={onChangeOfForm}
					/>
					<Button color="green"> {isEditing ? "Edit User" : "Add User"}</Button>
				</Box>
			</Box>
		</>
	);
};
export default AddUser;
