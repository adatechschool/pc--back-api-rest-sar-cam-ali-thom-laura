// tuto suivi: https://www.youtube.com/watch?v=hjR52rCqlQU&t=1319s

//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
const express = require('express'); 
// Nous créons un objet de type Express. 
const app = express(); 
require ('./models/dbConfig');
 
// Nous définissons ici les paramètres du serveur.
const hostname = 'localhost'; 
const port = 3000; 
 
const usersRoutes = require ('./routes/usersController');

app.use (express.json())

app.use ('/', usersRoutes);
 

// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});