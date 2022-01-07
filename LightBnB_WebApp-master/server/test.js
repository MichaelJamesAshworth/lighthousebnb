const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "lightbnb",
  // port: "3000",
});
/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
//  */
const getUserWithEmail = function (email) {
  const queryString = `
    SELECT *
    FROM users
    WHERE users.email = $1
    `;
  const values = [email];
  return pool
    .query(queryString, values)
    .then((res) => {
      if (res.rows.length === 0) {
        console.log("Sorry there were no rows being fetched");
      } else {
        console.log("test", res.rows[0]);
        console.log("test:", res.rows);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
getUserWithEmail("michaelgray@mail.com");


