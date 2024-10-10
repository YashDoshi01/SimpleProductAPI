function productWithID(req ,res)
{
    const id = req.params.id;
    res.json(`The params are ${id}`);
}

module.exports = productWithID;