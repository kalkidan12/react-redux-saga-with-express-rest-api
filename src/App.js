import { Form, Table, NavBar } from "./Components/Styled/StyledRebass";
import AddUser from "./Components/Users/AddUser";
import ShowUser from "./Components/Users/ShowUser";
import { Box } from "rebass";
import { A, Button } from "./Components/Styled/StyledEmotion";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path="/adduser" exact element={<AddUser />} />
				<Route path="/" element={<ShowUser />} />
			</Routes>

			<Box
				sx={{
					maxWidth: 512,

					py: 30,
				}}
			>
				<Button color="green">
					<A href="https://github.com/kalkidan12/interntestproject">
						my code on github
					</A>
				</Button>
			</Box>
		</>
	);
}

export default App;
