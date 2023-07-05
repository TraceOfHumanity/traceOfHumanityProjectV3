import DescriptionModel from "../models/Description.js";

export const create = async (req, res) => {
  try {
    const doc = new DescriptionModel({
      description: req.body.description,
    });

    const description = await doc.save();
    res.json(description);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося створити description",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const description = await DescriptionModel.find();

    res.json(description);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося отиримати description",
    });
  }
};
export const update = async (req, res) => {
  try {
    await DescriptionModel.updateOne({
      description: req.body.description,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не вдалося оновити description",
    });
  }
};
