const express = require("express");
const app = express();
const cors = require("cors");
const apiRoutes = require("./Routes/routes");


app.use(cors());
app.use(express.json());


//Routes
app.use("/api" , apiRoutes)

app.listen(8080 , ()=> {
    console.log("API Server running on port 8080!");
});