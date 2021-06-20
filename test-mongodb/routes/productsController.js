const express = require ('express');

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet router, que nous allons implémenter les méthodes. 
const router = express.Router();

const {ProductsModel} = require ('../models/productsModel');

router.get ('/', (req, res) => {
    ProductsModel.find ((err, data) => {
        if (!err) res.send (data);
        else console.log("Error to get data: " + err);
    })
})

module.exports = router