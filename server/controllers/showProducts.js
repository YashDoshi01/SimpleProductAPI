const {Product} = require("../sequelize/models");



async function allProducts(req , res)
{
    const {s} = req.query;
    // console.log(s);
    const page = req.query.page || 1;  
        const pageSize = req.query.pageSize || 10; 
    try {
        if(!s){
        const products = await Product.findAll({
          limit: pageSize,
          offset: (page - 1) * pageSize,
        });
        res.json(products);
    }
    else{
        try{
        const products = await Product.findAll({
            where: {
              category: s ,
            }
        });
        if(products.length >0)
            res.json(products);
        else res.json("No products found under this category");
    }
    catch(err){
        res.json(err);
    }
    }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

module.exports = {allProducts};