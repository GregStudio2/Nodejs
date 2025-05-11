const db = require("./db_config");

const sql = `DELETE FROM favorite_songs`;

db.run(sql, (err) => {
  if (!err) console.log("All data deleted");
});

db.close();