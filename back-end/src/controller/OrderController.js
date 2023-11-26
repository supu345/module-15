const OrderModel = require("../models/OrderModel");

//create
exports.createOrder = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await OrderModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

//Delete
exports.deleteOrder = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  try {
    let result = await OrderModel.deleteOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};
//update
exports.updateOrder = async (req, res) => {
  let id = req.params.id;
  let reqBody = req.body;
  let query = { _id: id };
  try {
    let result = await OrderModel.updateOne(query, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

//Read
exports.listOrder = async (req, res) => {
  try {
    let result = await OrderModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};

exports.orderByID = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let result = await OrderModel.find(query);
    res.status(200).json({ status: "success", data: result });
  } catch (e) {
    res.status(200).json({ status: "fail", data: e });
  }
};
