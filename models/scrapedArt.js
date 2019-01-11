var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ArtSchema = new Schema({
  // `title` is of type String
  title: {
    type: String,
    unique: true,
  },
  // `body` is of type String
  link: String,

  picture: String,

  saved: {
    type: Boolean,
    default: false
  },

  notes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Note"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Art = mongoose.model("Art", ArtSchema);

// Export the Note model
module.exports = Art;