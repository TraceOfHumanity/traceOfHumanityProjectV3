import PostModel from "../models/Post.js";

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(5).exec();
    const tags = posts
      .map((obj) => obj.tags)
      .flat()
      .slice(0, 5);
    res.json(tags);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося отиримати статті",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("user").exec();

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося отиримати статті",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { viewsCount: 1 } },
      { new: true }
    ).exec();

    if (!updatedPost) {
      return res.status(404).json({
        message: "Стаття не знайдена",
      });
    }

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не вдалося отримати статтю",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await PostModel.findByIdAndDelete({ _id: postId });

    if (!doc) {
      return res.status(404).json({
        message: "стаття не знайдена",
      });
    }

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не вдалося видалити статтю",
    });
  }
};
export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
        tags: req.body.tags,
      }
    );

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
export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    const post = await doc.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не вдалося створити статтю",
    });
  }
};
