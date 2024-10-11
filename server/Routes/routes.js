const express = require("express")
const {allProducts} = require("../controllers/showProducts");
const productWithID = require("../controllers/showProductwithID");
const deleteProduct = require("../controllers/deleteProduct");
const updateProduct = require("../controllers/updateProduct");
const createProduct = require("../controllers/createProduct")

const router = express.Router();


router.post("/products" , createProduct);
router.get("/products" , allProducts);
router.get("/products/:id" , productWithID);
router.put("/products/:id" , updateProduct);
router.delete("/products/:id" ,deleteProduct);

module.exports = router;