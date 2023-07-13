import { Router } from "express";
import { ProductManager } from "../dao/productManager.js";

const productService = new ProductManager("products.json");

const validateFields = (req, res, next) => {
  const productInfo = req.body;
  if (!productInfo.tittle || !productInfo.description || !productInfo.price) {
    return res.json({ status: "error", message: "campos incompletos" });
  } else {
    next();
  }
};

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await productService.get();
    res.json({ status: "succes", data: products });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});
router.get("/:pid", (req, res) => {});
router.post("/", validateFields, async (req, res) => {
  try {
    const productInfo = req.body;
    const productCreated = await productService.get(productInfo);
    res.json({ status: "succes", data: productCreated, message:"producto creado de manera exitosa" });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

router.put("/:pid", validateFields, (req, res) => {
  const productInfo = req.body;
});

router.delete("/:pid", (req, res) => {});

export { router as productsRouter };
