import { Box, Flex } from "rebass";
import { Label, Input, Radio } from "@rebass/forms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Common";

export default function AddUser() {
	return (
		<>
			<NavBar name="Cancel Edit" />
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
