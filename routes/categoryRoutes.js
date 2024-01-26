import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  singleCategoryController,
} from "../controllers/categoryController.js";
import { updateCategoryController } from "../controllers/categoryController.js";
import { categoryController } from "../controllers/categoryController.js";
import { deleteCategoryController } from "../controllers/categoryController.js";
const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all Category
router.get("/get-category/", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete Category
router.delete("/delete-category/:id",requireSignIn,isAdmin, deleteCategoryController)

export default router;
