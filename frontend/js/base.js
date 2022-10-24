const EXPRESS_ENDPOINT = "http://localhost:3000";
const HASURA_ENDPOINT = "http://localhost:8080/v1/graphql";

const jwtToken = localStorage.getItem("jwt_token");

if (jwtToken) {
  document.querySelector(".is-authenticated").style.display = "block";
  document.querySelector(".not-authenticated").style.display = "none";

  // query user info
  fetch(HASURA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      query: `query getUser {
				user {
					email
					id
				}
			}`,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      if (res.data.user) {
        document.getElementById("display-email").innerText =
          res.data.user[0].email;
      }
    });
}

const logout = document.getElementById("logout");
if (logout) {
  logout.addEventListener("click", (evt) => {
    localStorage.removeItem("jwt_token");
    window.location.href = "/index.html";
  });
}
