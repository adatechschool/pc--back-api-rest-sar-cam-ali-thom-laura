const express = require("express");
const app = express();
var db = require("./database.js");

const port = 3000;

app.listen(port, () => {
  console.log("Serveur à l'écoute");
});

app.get("/api/produits", (req, res, next) => {
  var sql = "select * from produits";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.use(function (req, res) {
  res.status(404);
});

// Pour que notre serveur puisse être à l'écoute il faut maintenant utiliser la méthode listen

// Dans ce code, à l'arrivée d'une requête GET sur l'URL localhost:3000, le serveur a pour instruction d'envoyer la String "coucou".
// Elle prend en premier paramètre une String qui défini la route à écouter et une callback, qui est la fonction à exécuter si cette route est appelée. Cette callback prend en paramètre l'objet req, qui reprend toutes les données fournies par la requête, et l'objet res, fourni par express, qui contient les méthodes pour répondre à la requête qui vient d'arriver.
// endpoint
// apres c'est une fonctionne qui fournit la reponse aux clients quand notre point de terminisont est appeler
// req - pour recuperer l'objet request qui correspond a la requette recu a l'entree par notre point de terminaison
// res - response - l'objet qu'on doit renvoyer a notre client
// on utilise la methode send de l'objet response afin de retourner le message dans les ""
