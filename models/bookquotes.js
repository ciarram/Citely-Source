const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//jm
const bookSchema = new Schema({
    //     _projectId: {
    //         type: Schema.Types.ObjectId,
    //         ref: "Project" 
    // },
title: {type: String, required: true},
author: {type: String, required: true},
publisher: {type: String, required: true},
pubDate: {type: Date, required: true},
pageNum: {type: Number, required: true},
quote: {type: String, required: true},
projectId:{type: String, required: false}
});
 
const Bookquote = mongoose.model("Bookquotes", bookSchema);

module.exports = Bookquote;