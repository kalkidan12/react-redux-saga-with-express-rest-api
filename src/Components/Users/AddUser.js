import React from "react";
import { Heading } from "rebass";
import { Form } from "../Styled/StyledRebass";
import { Box } from "rebass";
const AddUser = () => {
	return (
		<>
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
					Add User
				</Heading>
				<Form />
			</Box>
		</>
	);
};

export default AddUser;
