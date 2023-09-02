import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
} from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";

const router = Router();

//app is the entire api , router is subpart , roters can be sub apps

// FOR PRODUCTS ////////////////////

router.get("/product", getProducts);

router.get("/product/:id", getOneProduct); //id is router parameter and its variable

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
// checks if req.body has name property on it {body("name").isString()}

// needs name and belongs to id , we get user id from miidleware in auth that attached user to req.user , so the middleware helps in
router.post(
  "/product/",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.delete("/product/:id", deleteProduct);

// FOR UPDATE //////////////////////

router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

// FOR UPDATE_POINTS /////////

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);

router.post(
  "/updatepoint/",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
