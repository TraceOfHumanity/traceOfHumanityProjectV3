import SkillsModel from "../models/Skills.js";

export const create = async (req, res) => {
  try {
    const doc = new SkillsModel({
      skills: req.body.skills,
    });

    const mySkill = await doc.save();
    res.json(mySkill);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося створити skills",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const mySkill = await SkillsModel.find();

    res.json(mySkill);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося отиримати skills",
    });
  }
};

export const update = async (req, res) => {
  try {
    await SkillsModel.updateOne({
      skills: req.body.skills,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не вдалося оновити статтю",
    });
  }
};
