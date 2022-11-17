const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const colors = require("colors");
const toursRoute = require('./V1/Routes/Tours.route')


// middlewares
app.use(cors())
app.use(express.json())




app.use('/api/v1/tours',toursRoute)



app.get("/", (req, res) => {
    try {
        res.send("Welcome to Tour Management Server")
    } catch (error) {
       console.log(error.message) 
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;