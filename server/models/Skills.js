import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
  skills: String,
});

export default mongoose.model("Skills", SkillsSchema);
