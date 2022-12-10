const db = require('../db.js');

exports.getMenu = (req, res) => {
  const q = 'SELECT * FROM `menu`';
  db.sql.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};
