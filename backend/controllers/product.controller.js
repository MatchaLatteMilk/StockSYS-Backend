const Product = require('../models/product.model');

const current = (req,res) => {
    console.log('/api/product/current')
    res.status(200).json({data: req.Product})
}

const showall = async (req,res) => {
    try{
        console.log('api/product/showall')
        Product.find({},(err,result) => {
            if(err) console.log(err);
            else{
                res.json(result);
            }
        })
    }catch(err){
        res.status(400).end()
    }
}

const showone = async (req,res) => {
    try{
        console.log('api/product/showall')
        Product.find({product_id: req.product_id},(err,result) => {
            if(err) console.log(err);
            else{
                res.json(result);
            }
        })
    }catch(err){
        res.status(400).end()
    }
}

const removeall = async (req,res) => {
    try{
        console.log('api/product/removeall')
        Product.deleteMany({},(err,result) => {
            if(err) console.log(err);
            else {
                res.json(result);
            }
        })
    }catch(err){
        res.status(400).end()
    }
}

const removebyId = async (req,res) => {
    try{
        console.log('api/product/removebyId')
        Product.deleteOne({product_id: req.product_id})
    }catch(err){
        res.status(400).end()
    }
}

const create = async (req,res) => {
    console.log('api/product/create')
    try{
        if(!req.body.name || !req.body.product_id || !req.body.stock){
            return res.status(400).send({ message: 'all field must be filled' })
        }else{
            const data = req.body
            console.log('data',data)
            let newdata = new data({
                name: data.name,
                product_id: data.product_id,
                stock: data.stock
            })
            console.log('data2',data)
            newdata.save((err,result) => {

                if(err) res.status(200).end()
                else {
                    res.json({success: true, result});
                }
            })
        }
    }catch(err){
        res.status(500).end()
    }
}

const changestock = async (req,res) => {
    try{
        let data = await Product.findOneAndUpdate(product_id,req.body.stock)
    }catch(err){
        res.status(400).end()
    }
}

module.exports = {
    current,
    showall,
    showone,
    removeall,
    removebyId,
    create,
    changestock
}