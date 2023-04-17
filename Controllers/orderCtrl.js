const axios = require('axios');


const Order = {
    orderById: async(req,res)=>{
        try{
            const orderId = req.body.queryResult.parameters.orderId;
        const api = await axios.post('https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus', { orderId });
        
        const shipDate = new Date(api.data.shipmentDate);
        const response = {
                fulfillmentText: `Your order with ID ${orderId} will be shipped on ${shipDate}.`
        };
            res.json(response);
        }catch(err){
            res.json(err);
        }
    }

}

module.exports = Order;