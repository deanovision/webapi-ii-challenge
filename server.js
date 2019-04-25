// import express using common js
const express = require("express");
/// import cors
const cors = require("cors");
// setup up our server using by invoking express
const server = express();
// import postsRouter
const postsRouter = require("./posts/posts-router");
// tell server to parse json
server.use(express.json());
/// tell server to use cors
server.use(cors());
// setup routing for all /api/posts HTTP calls
server.use("/api/posts", postsRouter);

//export server
module.exports = server;
