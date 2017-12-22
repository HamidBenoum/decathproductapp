const fetch = require("node-fetch");
//funcions fetch all categories
function fetchRessources() {
  return fetch("https://decath-product-api.herokuapp.com/categories/",{method: "GET"})
   .then((response) => response.json())
   .catch((error) => {console.warn("Ceci est une erreur : ", error);});
}

//fetchRessources();

//funcions fetch all products from categorie
function fetchproductsByCategoryId(catgeroryId) {
  return fetch(`https://decath-product-api.herokuapp.com/categories/${catgeroryId}/products`,{method: "GET"})
   .then((response) => response.json())
   .catch((error) => {console.warn("Ceci est une erreur : ", error);});
}

//fetchRessources();


//fetchproductsById("98bbd88d-6e8c-4be6-8a2c-ef8e6ceca3af");
function fetchproductsById(productId) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${productId}`,{method: "GET"})
   .then((response) => response.json())
   .catch((error) => {console.warn("Ceci est une erreur : ", error);});
}




module.exports = {
  fetchRessources:fetchRessources,
  fetchproductsByCategoryId:fetchproductsByCategoryId,
  fetchproductsById:fetchproductsById
};

//https://bootsnipp.com/snippets/featured/font-awesome-star-ratings
