import { Form, Table, NavBar } from "./Components/Styled/StyledRebass";
import AddUser from "./Components/Users/AddUser";
import ShowUser from "./Components/Users/ShowUser";
import EditUser from "./Components/Users/EditUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/adduser" exact element={<AddUser />} />
					<Route path="/edituser" exact element={<EditUser />} />
					<Route path="/" element={<ShowUser />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
