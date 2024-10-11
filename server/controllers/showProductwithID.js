const {Product} = require("../sequelize/models");

async function productWithID(req ,res)
{
    try
    {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if(!product) res.status(404).json(`product with id ${id} does not exist`);
    res.json(product);
    }
    catch(err)
    {
        res.json(err);
    }
}

module.exports = productWithID;