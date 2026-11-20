// console.log(__filename);

const path = require("path");
console.log("Full Path:", __filename);
console.log("File Name:", path.basename(__filename));
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));