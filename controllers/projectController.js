const db = require("../models");

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
  //find all quotes associated with a particular project.(Same route can be recreated for outline and article quote schemas. The only difference is we would use db.Bookquote and db.Outline. Can add later and attach to buttons on the front end to display all data associated with one project. jm)
  findAllInProject: function (req, res) {
    if (req.user) {
      console.log(req.params.id);
      db.Bookquote 
        .find({projectId : req.params.id})
        // .sort({ date: -1 })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err, console.log(err)));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  findById: function (req, res) {
    if (req.user) {
      db.Project
        .findById(req.params.id)
        // .create({title : req.body.title, author : req.body.author, publisher : req.body.publisher, pubDate : req.body.pubDate, pageNum : req.body.pageNum, quote : req.body.quote})
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  //create new project 
  create: function (req, res) {
    console.log("inside create function")
    console.log(req.body.projectName);
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
        .create({title : req.body.title, author : req.body.author, publisher : req.body.publisher, pubDate : req.body.pubDate, pageNum : req.body.pageNum, quote : req.body.quote, projectId : req.body.projectId })
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
        .create({articleName : req.body.articleName, author : req.body.author, siteName : req.body.siteName, version : req.body.version, number : req.body.number, publisher : req.body.publisher, pubDate : req.body.pubDate, url : req.body.url, accessDate : req.body.accessDate, quote : req.body.quote, projectId : req.body.projectId })
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
//update book quote
  updatebookq: function (req, res) {
    if (req.user) {
      db.Bookquote
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  //delete book quote
  deletebookq: function (req, res) {
    if (req.user) {
      db.Bookquote
        .findById({ _id:"5a01073dc633b807666f8da1"})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
//delete project
deleteproject: function (req, res) {
  if (req.user) {
    db.Project
      .findById({ _id:"5a01073dc633b807666f8da1"})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  else { res.json({ error: "Please login", statusCode: 401 }) }
}
};
