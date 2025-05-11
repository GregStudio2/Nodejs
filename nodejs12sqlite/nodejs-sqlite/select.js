const db = require("./db_config");

const sql = "SELECT * FROM favorite_songs";

db.all(sql, (err, rows) => {
  if (err) throw err;

  if (rows.length > 1) {
    // cetak isi rows
    rows.forEach((song) => {
      console.log(`[${song.id}] ${song.artist} - ${song.title}`);
    });
  } else {
    console.log("tidak ada data/hasil");
  }
});

db.close();