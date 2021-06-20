const mongoose = require ('mongoose');

// création d'un modèle pour la table products
const ProductsModel = mongoose.model (
    "api-meubles",
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Int32Array, 
            required: true
        }, 
        dim_l: {
            type: Int32Array, 
            required: true
        }, 
        dim_w: {
            type: Int32Array, 
            required: true
        }, 
        dim_h: {
            type: Int32Array, 
            required: true
        }, 
        pic: {
            type: String, 
            required: true
        }, 
        category: {
            type: String, 
            required: true
        }, 
        color: {
            type: String, 
            required: true
        }, 
        material: {
            type: String, 
            required: true
        }, 
        status: {
            type: String, 
            required: true
        }, 
    },
    "products"
);

module.exports = {ProductsModel}; 