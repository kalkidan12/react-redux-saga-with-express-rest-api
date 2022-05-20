import axios from "axios";
const axiosClient = axios.create({
	baseURL: "https://interndatabase.herokuapp.com/api",
});

export function capitalizeName(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default axiosClient;
