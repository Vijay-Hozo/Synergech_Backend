const express = require('express');
const cookieParser = require("cookie-parser");
const userRoute = require('./Routes/UserRoute.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(userRoute);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});