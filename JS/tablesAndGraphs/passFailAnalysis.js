//Given that this JavaScript file contains functions for analyzing and displaying pass/fail ratios and attempts for exercises
//This name reflects the core functionality of the code, which includes getting pass/fail data, placing pass/fail ratios, and creating fail charts.

function getPassFail(progress) {
	// Segregate data into 2 arrays, containing go and js exercise info respectively
	const go = [];
	const js = [];
	progress.forEach((el) => {
		if (el.path.includes("piscine-go")) go.push(el);
		if (el.path.includes("piscine-js")) js.push(el);
	});

	// Create an object that has all the go-piscine excercise passes and fails.
	const goExercises = {};
	for (let i = 0; i < go.length; i++) {
		const pathSplit = go[i].path.split("/");
		let name = pathSplit[pathSplit.length - 1];

		if (name.includes("24-01-2024")) {
			const tempName = name.split("24-01-2024-");
			name = tempName[tempName.length - 1];
		}

		if (!Object.keys(goExercises).includes(name)) {
			goExercises[name] = {
				pass: 0,
				fail: 0,
			};
		}

		if (go[i].grade === 1) {
			goExercises[name].pass += 1;
			continue;
		}

		if (go[i].grade === 0) {
			goExercises[name].fail += 1;
			continue;
		}
	}
}