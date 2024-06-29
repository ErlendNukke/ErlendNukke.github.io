export const fetchUserData = async () => {
  // Your query to fetch user information, audit ratio, and XP details
// Query for name, audit ratio and numbers, xp.
const userDataQuery = `
    query user {
        user {
            id
            login
            firstName
            lastName
            totalUp
            totalDown
            auditRatio
            xps {
                amount
                __typename
                path
            }
        }
    }
`;


	const JWTtoken = JSON.parse(sessionStorage.getItem("JWT"))["value"];
	const query = userDataQuery;

	try {
		const info = await fetch("https://01.kood.tech/api/graphql-engine/v1/graphql", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + JWTtoken,
			},
			body: JSON.stringify({ query }),
		});

		const jsonData = await info.json();
		const userData = jsonData.data.user[0];

    console.log("USERDATA:", userData);
		return userData;
	} catch (error) {
		console.log(error);
	}
}

