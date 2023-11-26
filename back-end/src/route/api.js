const express = require("express");
const Order = require("../controller/OrderController");
const router = express.Router();
const OrderModel = require("../models/OrderModel");

//Task
router.post("/create-Order", Order.createOrder);
router.get("/delete-Order/:id", Order.deleteOrder);
router.post("/update-Order/:id", Order.updateOrder);
router.get("/list-Order", Order.listOrder);
router.get("/order-by-id/:id", Order.orderByID);
module.exports = router;
