const {Product} = require("../sequelize/models");

async function updateProduct(req , res){
    try{
   
    const id = req.params.id;
    const updatedProduct = await Product.findByPk(id);
    console.log(updatedProduct);
    if (!updatedProduct) return res.status(404).json({ error: "Product not found" });

    await updatedProduct.update(req.body);
    res.json(updatedProduct);
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
}

module.exports = updateProduct;