# API

## Meubles

### Endpoints
- /api/products/all
	- Renvoie une liste de tous les objets produits avec toutes les infos
	- Accepts: GET
- /api/products/new
	- Ajoute dans la db un nouveau produit
	- Accepts: PUT
- /api/products/<id: INT>
	- Renvoie, modifie,supprime un produit avec un INT specifique
	- Accepts: GET, DELETE, PATCH
- /api/products/categories/<category: STRING>
	- Renvoie les produits qui sont dans une categorie specifique
	- Accepts: GET

## Uitlisateurs

### Endpoints
- /api/users/all
	- Renvoie tous les utilisateurs
	- Accepts: GET
- /api/users/register
	- Ajoute un utilisateur a la db
	- Accepts: PUT
- /api/users/connect
	- Verification des donnees entrees
	- Accepts: POST
- /api/users/<id: INT>
	- Renvoie, Modifie, Supprime un utilisateur par INT
	- Accepts: GET, DELETE, PATCH
- /api/users/<id: INT>/password
	- Modifie le mot de passe de l'utilisateur
	- Accepts: PATCH
- 
