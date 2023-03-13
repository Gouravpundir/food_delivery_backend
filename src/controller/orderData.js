
const orderModel = require('../models/orderModel');
const orderData= async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await orderModel.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await orderModel.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.send({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await orderModel.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.send({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
}

module.exports ={orderData}