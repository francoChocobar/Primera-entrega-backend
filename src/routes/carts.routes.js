import { Router } from "express";
import { CartManager } from "../dao/cartManager.js";
import { ProductManager } from "../dao/productManager.js";

const cartService = new CartManager("carts.json");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const cartCreated = await cartService.save();
    res.json({ status: "success", data: cartCreated });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});
router.get("/:cid", (req, res) => {});
router.post("/:cid/product/:pid", async (req, res) => {
  try {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    res.json({ status: "success", data: cartCreated });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

export { router as cartsRouter };
