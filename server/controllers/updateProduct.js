function updateProduct(req , res){
    const id = req.params.id;
    res.json(`product with id ${id} updated successfully`);
}

module.exports = updateProduct;