import { Form, Table, NavBar } from "./Components/Styled/StyledRebass";
import AddUser from "./Components/Users/AddUser";
import ShowUser from "./Components/Users/ShowUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path="/adduser" exact element={<AddUser />} />
				<Route path="/" element={<ShowUser />} />
			</Routes>
		</>
	);
}

export default App;
