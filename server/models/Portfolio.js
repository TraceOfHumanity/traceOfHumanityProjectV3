import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  imageUrl: String,
});

export default mongoose.model("Portfolio", PortfolioSchema);
