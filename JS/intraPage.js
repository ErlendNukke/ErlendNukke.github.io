import { sessionExpirationCheck } from "./session.js";
import { logoutHandler } from "./listeners.js";
import { fetchUserData } from './getInfo/userInfo.js';
import { fetchLevelData } from "./getInfo/levelInfo.js";
import { fetchGraphInfo } from "./getInfo/graphInfo.js";
import { fetchProgressInfo } from "./getInfo/modulResultInfo.js";


export async function userData() {

	// Check if the session has expired
	sessionExpirationCheck("intraPage");
	// Set up the logout button handler
	logoutHandler();

}

