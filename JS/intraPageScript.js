import { userData } from "./intraPage.js";
import { sessionExpirationCheck } from "./session.js";
import { logoutHandler } from "./listeners.js";
import { fetchUserData } from "./getInfo/userInfo.js";
import { fetchLevelData } from "./getInfo/levelInfo.js";
import { displayName } from "./tablesAndGraphs/userDashboard.js";
import { displayAudit } from "./tablesAndGraphs/userDashboard.js";
import { displayModuleLevel } from "./tablesAndGraphs/userDashboard.js";
import { displayModuleXP } from "./tablesAndGraphs/userDashboard.js";
import { getModuleLevel } from "./tablesAndGraphs/userDashboard.js";
import { calculateModuleXP } from "./tablesAndGraphs/userDashboard.js";
import { audits } from "./tablesAndGraphs/audits.js";
import { placeProgress } from "./tablesAndGraphs/progressChart.js";
import { getPassFail } from "./tablesAndGraphs/passFailAnalysis.js";
import { fetchGraphInfo } from "./getInfo/graphInfo.js";
import { fetchProgressInfo } from "./getInfo/modulResultInfo.js";


userData();
intraPage();


// Base func for the profile page.
export async function intraPage() {
	sessionExpirationCheck("intraPage");
	logoutHandler();

	// Fetch the necessary data from the GraphQL API.
	const userInfo = await fetchUserData();
	const levelInfo = await fetchLevelData();
	const graphInfo = await fetchGraphInfo();
	const passAndFailInfo = await fetchProgressInfo();
	console.log(passAndFailInfo);


	// Necessary variables for displaying data.
	const { div01XP, piscineGO, piscineJS } = calculateModuleXP(userInfo.xps);
	const { goExercises, jsExercises } = getPassFail(passAndFailInfo);

	// Display the data received.
	displayName(`${userInfo.firstName} "${userInfo.login}" ${userInfo.lastName}`);
	displayAudit(userInfo.auditRatio, userInfo.totalUp, userInfo.totalDown);
	displayModuleLevel(getModuleLevel(levelInfo));
	displayModuleXP(div01XP, piscineGO, piscineJS);

	audits(userInfo.auditRatio, userInfo.totalUp, userInfo.totalDown);
	getPassFail(goExercises, jsExercises);
	placeProgress(graphInfo, div01XP);

}


