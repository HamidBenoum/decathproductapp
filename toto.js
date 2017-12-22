
const fetch = require("node-fetch");



//funcions
function fetchRessources() {
  return fetch("https://decath-product-api.herokuapp.com/categories/",{method: "GET"})
   .then((response) => response.json())
   .then((jsonresponse) => {
     jsonresponse.forEach(element => console.log(element.label))
     //return jsonresponse;
   })
   .catch((error) => {console.warn("Ceci est une erreur : ", error);});
}

fetchRessources();
