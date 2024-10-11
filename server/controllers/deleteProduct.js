const {Product} = require("../sequelize/models");

async function deleteProduct(req , res)
{
    const id = req.params.id;  // Get the id from request parameters

    try {
      const deleted = await Product.destroy({
        where: {
          id: id  // Delete the product where the id matches
        }
      });
  
      if (deleted) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}
module.exports = deleteProduct;