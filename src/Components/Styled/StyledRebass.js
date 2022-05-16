import React from "react";
import { Text, Box, Card, Flex, Link } from "rebass";
import { Label, Input, Select, Radio } from "@rebass/forms";
import {
	Button,
	TableData,
	TableHead,
	TableRow,
	TableLayout,
} from "./StyledEmotion";

export const Form = () => {
	return (
		<Card>
			<Label my={2} htmlFor="email">
				First Name
			</Label>
			<Input
				id="fname"
				name="fname"
				type="name"
				placeholder="Enter First Name"
			/>
			<br></br>
			<Label my={2} htmlFor="email">
				Last Name
			</Label>
			<Input
				id="lname"
				name="name"
				type="email"
				placeholder="Enter Last Name"
			/>
			<br></br>
			<Label my={2} htmlFor="email">
				Age
			</Label>
			<Input id="age" name="age" type="number" placeholder="Enter Age" />
			<Label my={2} htmlFor="email">
				Gender
			</Label>
			<Flex>
				<Label>
					<Radio name="color" id="red" value="red" />
					Red
				</Label>
				<Label>
					<Radio name="color" id="green" value="green" />
					Green
				</Label>
				<Label>
					<Radio name="color" id="blue" value="blue" />
					Blue
				</Label>
			</Flex>

			<Label my={2} htmlFor="height">
				Height
			</Label>
			<Input
				id="height"
				name="height"
				type="number"
				placeholder="Enter Height"
			/>
			<Button color="green">Add User</Button>
		</Card>
	);
};

export const NavBar = (title) => {
	return (
		<>
			<Flex
				py={2}
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
					Add User
				</Link>
				<Link variant="nav" href="#!"></Link>
			</Flex>
		</>
	);
};

export const Table = () => {
	return (
		<>
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

					<TableRow>
						<TableData>Kalkidan</TableData>
						<TableData>Kalkidan</TableData>
						<TableData>Kalkidan</TableData>
						<TableData>Kalkidan</TableData>
						<TableData>Kalkidan</TableData>
						<TableData>
							<Button color="green">Edit</Button>
						</TableData>
						<TableData>
							<Button color="red">Delete</Button>
						</TableData>
					</TableRow>
				</TableLayout>
			</Flex>
		</>
	);
};
