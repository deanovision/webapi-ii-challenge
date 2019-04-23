//import express
const express = require("express");
// import database
const db = require("../data/db");
// setup router by invoking express.Router()
const router = express.Router();
// setup endpoint routing for
// setup GET request
router.get("/", (req, res) => {
  db.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({
        error: "The posts information could not be retrieved."
      });
    });
});
///setup POST requests for /api/posts
router.post("/", (req, res) => {
  const post = req.body;
  ///check to see if request contains both title and contents
  console.log(post);
  if (!post.title || !post.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.insert(post)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  }
});
//// setup GET request for /api/posts/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.findById(id)
    .then(post => {
      /// the findById method returns an array so in order to check whether the
      /// post with the given id exists in the database I first have to use an array method
      /// to find the given item in the array, if the item exist it is returned as postData
      /// otherwise it is returned as undefined using this I can check to see if the given Id exists
      const postData = post.find(item => item.id === Number(id));
      console.log(postData);
      /// check to see if the id received from params exists in database
      if (!postData) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The post information could not be retrieved."
      });
    });
});
//// setup DELETE function for /api/posts/:id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  db.remove(id)
    .then(post => {
      console.log(post);
      /// check to see if the post with the given ID exists in the database
      if (!post) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.status(200).json({
          message: "post was deleted"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The post could not be removed"
      });
    });
});
/// setup PUT function
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const postObj = req.body;
  //// check to ensure updated request contains title and contents
  if (!postObj.title || !postObj.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.update(id, postObj)
      .then(post => {
        ////check to see if post with given ID exists in the database
        if (!post) {
          res.status(404).json({
            message: "The post with the specified ID does not exist."
          });
        } else {
          res.status(200).json({
            message: "post was updated"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: "The post information could not be modified."
        });
      });
  }
});
//export router
module.exports = router;
