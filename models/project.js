const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//jm
const projectSchema = new Schema({
      // _userId: {
      //       type: Schema.Types.ObjectId,
      //       ref: "User"
      // }, 
      userId:{type: String, required: true},
      projectName:{type: String, required: true}
});
 
const Project = mongoose.model("Projects", projectSchema);

module.exports = Project;

