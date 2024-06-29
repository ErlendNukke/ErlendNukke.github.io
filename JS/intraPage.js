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

	const userData = await fetchUserData();
	if (userData) {
	  document.getElementById("username").textContent = `Username: ${userData.login}`;
	  document.getElementById("name").textContent = `Name: ${userData.firstName} ${userData.lastName}`;
	  document.getElementById("auditRatio").textContent = `Audit Ratio: ${userData.auditRatio}`;
	  document.getElementById("xp").textContent = `XP: ${userData.xps.map(xp => xp.amount).join(', ')}`;
	}

	const levelData = await fetchLevelData();
	if (levelData) {
	  document.getElementById("levels").textContent = `Levels: ${levelData.map(level => `${level.amount} (path: ${level.path}, date: ${level.createdAt})`).join(', ')}`;
	}

	const graphData = await fetchGraphInfo();
	if (graphData) {
	  document.getElementById("graph").textContent = `Graph Info: ${graphData.map(item => `XP: ${item.amount} (path: ${item.path}, date: ${item.createdAt})`).join(', ')}`;
	}

	const progressData = await fetchProgressInfo();
	if (progressData) {
	  document.getElementById("progress").textContent = `Progress Info: ${progressData.map(progress => `Grade: ${progress.grade} (path: ${progress.path}, date: ${progress.createdAt})`).join(', ')}`;
	}

	// Fetch and process user data
	// await fetchUserData();
	// await fetchLevelData();
	// await graphInfo();
	// await progressInfo();
}

userData();
