const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//jm
const articleSchema = new Schema({
        _projectId: {
            type: Schema.Types.ObjectId,
            ref: "Project" 
    },
        artquote: { 
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
 
const Articlequote = mongoose.model("Articlequotes", articleSchema);

module.exports = Articlequote;