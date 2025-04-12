import express from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
} from "../controllers/comments.controller.js";

const route = express.Router();

route.post("/", createComment);
route.get("/", getAllComments);
route.get("/:id", getCommentById);
route.put("/:id", updateComment);
route.delete("/:id", deleteComment);

export default route;
