import { logout as performLogout } from "./logout.js";
import { login } from "./login.js";

export function loginHandler() {
	const loginButton = document.getElementById("login");
	console.log("here1");
	loginButton.addEventListener("click", () => login());
	console.log("here2");

	window.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			login();
		}
	});
}

export function logoutHandler() {
	const logoutButton = document.getElementById("logout");
	console.log("here logout");
	logoutButton.addEventListener("click", () => performLogout());
}
