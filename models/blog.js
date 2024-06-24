const { Schema, model } = require("mongoose");

// Define the schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
      required: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user", // Make sure "User" matches the name of your user model
    },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Blog = model("Blog", blogSchema); // "Blog" should be capitalized

module.exports = Blog;
