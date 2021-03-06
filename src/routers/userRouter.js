import express from "express";
import {
  getEdit,
  postEdit,
  see,
  logout,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import {
  protectorMiddleware,
  publicOnlyMiddeware,
  avatarUpload,
} from "../middlewares";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddeware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddeware, finishGithubLogin);
userRouter.get("/logout", protectorMiddleware, logout);
//변수로 지정하기위해서 id앞에 : 이거 붙임.
userRouter.get("/:id", see);
export default userRouter;
