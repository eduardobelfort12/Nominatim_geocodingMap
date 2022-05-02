const path = require("path");

const paginaMapa = async (req, res) => {
  res.sendFile(path.join(__dirname + "/map/index.html"));
};

module.exports = { paginaMapa };
