//jm
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/paperhelper",
  {
    useMongoClient: true
  }
);

const projectsSeed = [
  {
    projectName: "Awesome Project",
    bookQuote: { 
        title: "Title",
        author: "Author McAuthor",
        publisher: "Publishing Co.",
        pubDate: 10/5/12,
        pageNum: 4,
        quote: "The most awesome quote ever!"
  },
    articleQuote: { 
        articleName: "Article Title",
        author: "Anne McAuthor",
        siteName: "Awesome Site",
        version: {type: String, required: false},
        number: {type: Number, required: false},
        publisher: {type: String, required: false},
        pubDate: {type: Date, required: false},
        url: "www.awesomesite.com",
        accessDate: 11/2/2017,
        quote: "If this works, I'll be so happy"
}
  }
];

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });