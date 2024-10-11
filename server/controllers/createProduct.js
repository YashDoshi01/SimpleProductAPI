const {Product} = require("../sequelize/models");

async function createProduct(req  , res)
{

    try{
        const {name , price , category , description} = req.body;
        if(!description)
        {
        if(typeof(name) === "string" && typeof(price) === "number" && typeof(category) === "string")
        {
    const product = await Product.create(req.body);
    return res.json(product);
        }
        
    
        else 
        {
            res.status(400).json("Enter the valid data types");
        }
    }
    else{
        if(typeof(name) === "string" && typeof(price) === "number" && typeof(category) === "string" && typeof(description) ==="string")
            {
        const product = await Product.create(req.body);
        return res.json(product);
            }
            
        
            else 
            {
                res.status(400).json("Enter the valid data types");
            }
    }
    }
    catch(err)
    {
        if (err.name === 'SequelizeValidationError')
        {
           err.errors.forEach((error) => {
            if(error.path === "name")
            {
                res.json("Not a valid length");
            }
            if(error.path === "price")
                {
                    res.json("Give a valid value for price ");
                }
            if(error.path === "category")
                {
             res.json("Give a valid category");
                }
    //   console.log(`Invalid value: ${error.value}`);  // This gets the "value" field
    });
        }
        else
        {
            res.json(err);
        }
    }
}

module.exports = createProduct;