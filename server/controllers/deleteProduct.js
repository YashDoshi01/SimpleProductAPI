function deleteProduct(req , res)
{
    const id = req.params.id
    res.json(`Product with id ${id} deleted`);
}
module.exports = deleteProduct;