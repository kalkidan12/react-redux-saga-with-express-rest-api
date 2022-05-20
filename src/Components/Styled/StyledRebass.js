import React from "react";
import { Text, Box, Flex, Link } from "rebass";

import { useNavigate, useLocation } from "react-router-dom";

export const NavBar = (props) => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<>
			<Flex
				py={3}
				px={0}
				color="white"
				bg="green"
				alignItems="center"
				sx={{
					maxWidth: "1924px",
					mx: 0,
					px: 0,
				}}
			>
				<Text px={2} fontWeight="bold">
					User Management
				</Text>
				<Box mx="auto" />
				<Link
					sx={{
						display: "inline-block",
						fontWeight: "bold",
						px: 2,
						py: 1,
						color: "inherit",
						cursor: "pointer",
					}}
				>
					<Link
						onClick={() => {
							location.pathname === "/" ? navigate("/adduser") : navigate("/");
						}}
					>
						{props.name}
					</Link>
				</Link>
			</Flex>
		</>
	);
};
