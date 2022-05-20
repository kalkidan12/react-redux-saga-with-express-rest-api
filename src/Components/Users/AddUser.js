import { Box, Flex, Heading } from "rebass";
import { Label, Input, Radio } from "@rebass/forms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar, Form } from "../Styled/StyledRebass";
export default function AddUser() {
	return (
		<>
			<NavBar to="/" name="Cancel Add" />
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
}
