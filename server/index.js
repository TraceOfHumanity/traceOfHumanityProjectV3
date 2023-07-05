import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
  regiserValidation,
  loginValidation,
  postCreateValidation,
  portfolioCreateValidation,
  skillCreateValidation,
  descriptionAuthorCreateValidation,
} from "./validations/validations.js";
import checkAuth from "./utils/checkAuth.js";

import {
  UserController,
  PostController,
  PortfolioConrtoller,
  SkillsController,
  DescriptionAuthorConrtoller,
} from "./controllers/index.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";

mongoose
  .connect("")
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB error", error));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});
// -----------------------------------authorization--------------------------------------------------

app.post(
  "/authorization/registration",
  regiserValidation,
  handleValidationErrors,
  UserController.register
);
app.post(
  "/authorization/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.get("/authorization/me", checkAuth, UserController.getMe);

// -----------------------------------CRUD post--------------------------------------------------
app.post(
  "/post",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.get("/post", PostController.getAll);
app.get("/post/:id", PostController.getOne);
app.delete("/post/:id", checkAuth, PostController.remove);
app.patch(
  "/post/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

// -----------------------------------CRUD portfolio--------------------------------------------------
app.post(
  "/portfolio",
  checkAuth,
  portfolioCreateValidation,
  handleValidationErrors,
  PortfolioConrtoller.create
);
app.get("/portfolio", PortfolioConrtoller.getAll);

// -----------------------------------CRUD skills--------------------------------------------------
app.post(
  "/skills",
  checkAuth,
  skillCreateValidation,
  handleValidationErrors,
  SkillsController.create
);

app.get("/skills", SkillsController.getAll);

app.patch(
  "/skills",
  checkAuth,
  skillCreateValidation,
  handleValidationErrors,
  SkillsController.update
);

// -----------------------------------CRUD descriptionAuthor--------------------------------------------------
// -----------------------------------CRUD skills--------------------------------------------------
app.post(
  "/descriptionAuthor",
  checkAuth,
  descriptionAuthorCreateValidation,
  handleValidationErrors,
  DescriptionAuthorConrtoller.create
);
app.patch(
  "/descriptionAuthor",
  checkAuth,
  descriptionAuthorCreateValidation,
  handleValidationErrors,
  DescriptionAuthorConrtoller.update
);

// -----------------------------------PORT--------------------------------------------------

app.listen(2204, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server Working");
});
