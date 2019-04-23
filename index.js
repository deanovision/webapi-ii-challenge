//import server
const server = require("./server");
//setup server to listen on port 5000
server.listen(5000, () => {
  console.log("\n*********SERVER LISTENING ON PORT 5000*********\n");
});
