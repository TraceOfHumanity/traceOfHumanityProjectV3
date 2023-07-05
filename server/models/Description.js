import mongoose from "mongoose";

const descriptionAuthorSchema = new mongoose.Schema({
  description: String,
});

export default mongoose.model("DescriptionAuthor", descriptionAuthorSchema);
