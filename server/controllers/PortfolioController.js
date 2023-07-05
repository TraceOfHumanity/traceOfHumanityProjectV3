import PortfolioModel from "../models/Portfolio.js";

export const create = async (req, res) => {
  try {
    const doc = new PortfolioModel({
      imageUrl: req.body.imageUrl,
    });

    const portfolio = await doc.save();
    res.json(portfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося створити portfolio",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const portfolio = await PortfolioModel.find();

    res.json(portfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося отиримати portfolio",
    });
  }
};
