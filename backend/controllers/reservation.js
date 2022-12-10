const db = require("../db.js");
exports.addRes = (req, res) => {
  const q =
    "INSERT INTO `reservation` ( `name`, `email`, `phone`, `persons`, `date`, `time`, `SpecialRequests`) VALUES (?)";
  console.log(req.body);
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.persons,
    req.body.date,
    req.body.time,
    req.body.SpecialRequests,
    ...req.body.menu,
  ];
  db.sql.query(q, [values], (err, data) => {});
};
