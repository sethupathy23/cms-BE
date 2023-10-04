const fs = require("fs");
const quote = "No beauty shines brighter than that of a good heart";
fs.writeFile("./beauty.html", quote, (err) => {
  console.log("completed writing");
});
