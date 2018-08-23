var mongoose = require("mongoose");

// Save a reference to the Schema constructor
// need to add summary

var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    trim: true,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // summary: {
  //   type: String,
  //   required: true
  // }
//  need to get summary feature to work
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
