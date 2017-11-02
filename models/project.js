const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//jm
const projectSchema = new Schema({
    projectName: {type: String, required: true},
    bookQuote: { 
        title: {type: String, required: true},
        author: {type: String, required: true},
        publisher: {type: String, required: true},
        pubDate: {type: Date, required: true},
        pageNum: {type: Number, required: true},
        quote: {type: String, required: true}
  },
  articleQuote: { 
        articleName: {type: String, required: true},
        author: {type: String, required: false},
        siteName: {type: String, required: true},
        version: {type: String, required: false},
        number: {type: Number, required: false},
        publisher: {type: String, required: false},
        pubDate: {type: Date, required: false},
        url: {type: String, required: true},
        accessDate: {type: Date, required: true},
        quote: {type: String, required: true},
  }
});
 

const Project = mongoose.model("Projects", projectSchema);

module.exports = Project;

