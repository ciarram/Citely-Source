const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // find all projects associated with a user 
  findAll: function (req, res) {
    if (req.user) {
      console.log(req.user)
      db.Project
        .find({userId: req.user._id})
        .sort({ date: -1 })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err, console.log(err)));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  //
  findById: function (req, res) {
    if (req.user) {
      db.Project
        .findById(req.params.id)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  //create new project 
  create: function (req, res) {
    console.log("inside create function")
    if (req.user) {
      db.Project
        .create({projectName : req.body.projectName, userId: req.user._id})
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
//create new book quote 
  createbquote: function (req, res) {
    console.log("inside createbquote function");
    console.log(req.body.title, "req.body");
    if (req.user) {
      db.Bookquote
        // .findById(req.params.id)
        .create({title : req.body.title, author : req.body.author, publisher : req.body.publisher, pubDate : req.body.pubDate, pageNum : req.body.pageNum, quote : req.body.quote})
        // projectId : req.params.id
        // .create({projectId : req.body.projectId})
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  //create new article quote
  createartquote: function (req, res) {
    console.log("inside createartquote function");
    if (req.user) {
      db.Articlequote
        .create(req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  //create new outline
  createoutline: function (req, res) {
    console.log("inside outline function")
    if (req.user) {
      db.Outline
        .create(req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },

  update: function (req, res) {
    if (req.user) {
      db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  remove: function (req, res) {
    if (req.user) {
      db.Project
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  }
};
