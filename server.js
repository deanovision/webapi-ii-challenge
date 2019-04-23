// import express using common js
const express = require("express");
// setup up our server using by invoking express
const server = express();
// import postsRouter
const postsRouter = require("./posts/posts-router");
// tell server to parse json
server.use(express.json());
// setup routing for all /api/posts HTTP calls
server.use("/api/posts", postsRouter);

//export server
module.exports = server;
