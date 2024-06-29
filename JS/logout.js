import { endSession } from "./session.js";

export function logout() {
	console.log("here logout 1");
	endSession();
	window.location.href = "index.html";
}