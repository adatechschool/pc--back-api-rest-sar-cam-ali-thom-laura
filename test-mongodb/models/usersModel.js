const mongoose = require ('mongoose');

// création d'un modèle pour la table users
const UsersModel = mongoose.model (
    "api-meubles",
    {
        name: {
            type: String,
            required: true
        },
        display_name: {
            type: String, 
            required: true
        }, 
        mail: {
            type: String, 
            required: true
        }, 
        password: {
            type: String, 
            required: true
        }, 
    },
    "users"
);

module.exports = {UsersModel};