const express = require('express');
const bodyParser = require('body-parser');
const Order = require("./routes/orderRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Order);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});