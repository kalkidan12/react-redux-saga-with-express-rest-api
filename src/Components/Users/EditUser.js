import React from "react";
import { Heading } from "rebass";
import { Form, NavBar } from "../Styled/StyledRebass";
import { Box } from "rebass";
function EditUser() {
	return (
		<>
			<NavBar to="/" name="Cancel Edit" />
			<Box
				alignItems="center"
				sx={{
					maxWidth: 512,
					mx: "auto",
					my: 3,
					px: 3,
				}}
			>
				<Heading fontSize={[4, 5, 6]} color="black" alignItems="center">
					Edit User
				</Heading>
				<Form />
			</Box>
		</>
	);
}

export default EditUser;
