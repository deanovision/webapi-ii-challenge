const environment = require("dotenv").config();
//import server
const port = process.env.PORT || or 5000
const server = require("./server");
//setup server to listen on port 5000
server.listen(port, () => {
  console.log("\n*********SERVER LISTENING ON PORT 5000*********\n");
});
