const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const checkAuth = require("../middleware/check-auth");

router.post("/comment-create", checkAuth, (req, res, next) => {
  const comment = new Comment({
    title: req.body.title,
    content: req.body.content,
    creator: req.userData.userId
  });
  comment
    .save()
    .then(result => {
      res.status(201).json({
        message: "Comment added!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Adding a comment failed!"
      });
    });
});

router.put("/comment-edit/:id", checkAuth, (req, res, next) => {
  const comment = new Comment({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    creator: req.userData.userId
  });
  Comment.updateOne(
    { _id: req.params.id, creator: req.userData.userId },
    comment
  ).then(result => {
    if (result.nModified > 0) {
      res.status(200).json({ message: "Update successful!" });
    } else {
      res.status(401).json({ message: "Not authorized!" });
    }
  });
});

router.get("/comment-list", (req, res, next) => {
  Comment.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Comments fetched successfully!",
      comments: documents
    });
  });
});

router.get("/comment-list/:id", (req, res, next) => {
  Comment.findById(req.params.id)
    .then(comment => {
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({ message: "Comment not found!" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Fetching a comment failed!"
      });
    });
});

router.delete("/comment-list/:id", checkAuth, (req, res, next) => {
  Comment.deleteOne({
    _id: req.params.id,
    creator: req.userData.userId
  })
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Fetching comments failed!"
      });
    });
});

module.exports = router;
