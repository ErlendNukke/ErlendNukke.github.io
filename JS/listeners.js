import { logout as performLogout } from "./logout.js";
import { login } from "./login.js";

export function loginHandler() {
	const loginButton = document.getElementById("login");
	loginButton.addEventListener("click", () => login());
	window.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			login();
		}
	});
}

export function logoutHandler() {
	const logoutButton = document.getElementById("logout");
	logoutButton.addEventListener("click", () => performLogout());
}
