const { Schema, model } = require("mongoose");

// Define the schema
const commentSchema = new Schema(
  {
    content: {
        type: String,
        required: true,
    },
    blogID: {
        type: Schema.Types.ObjectId,
        ref: "blog",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },

  },
  {
    timestamps: true,
  }
);

// Create the model



