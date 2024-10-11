const express = require("express");
const app = express();
const cors = require("cors");
const apiRoutes = require("./Routes/routes");
const pg = require("pg");
const { sequelize } = require('./sequelize/models');

app.use(cors());
app.use(express.json());

//database stuff


sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });


//Routes
app.use("/api" , apiRoutes)

app.listen(8080 , ()=> {
    console.log("API Server running on port 8080!");
});