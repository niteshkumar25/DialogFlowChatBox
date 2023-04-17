const router = require("express").Router();

const Order = require("../Controllers/orderCtrl");

router.post("/orderStatus", Order.orderById);

module.exports = router;

