import express from "express";
import {
  createOrderItem,
  getAllOrderItems,
  getOrderItemByOrderId,
  updateOrderItem,
  deleteOrderItem,
} from "../controllers/orderItemController.js";

const router = express.Router();

router.post("/", createOrderItem);

router.get("/", getAllOrderItems);

router.get("/:order_id", getOrderItemByOrderId);

router.patch("/:id", updateOrderItem);

router.delete("/:id", deleteOrderItem);

export default router;
