const express = require("express");
const nunjucks = require("nunjucks");
const fetch = require("node-fetch");
const fetchRessources = require("./js/functions.js");
const fetchproductsByCategoryId = require("./js/functions.js");
const fetchproductsById = require("./js/functions.js");

const app = express();
const port = process.env.PORT || 3000;


nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");


app.get("/", function(request, result) {
  fetchRessources.fetchRessources()
  .then(function(elements) {
    result.render("home",{categories:elements});
  })
});

//Products by category
app.get("/categories/:id/products", function(request, result) {
  fetchproductsByCategoryId.fetchproductsByCategoryId(request.params.id)
  .then(function (elements) {
    result.render("categoryProducts", {products:elements});
  })
});


//product by id
app.get("/products/:id", function (request, result){
  fetchproductsById.fetchproductsById(request.params.id)
    .then(function (products) {
      result.render("productDetails", {product:products});
  })
});


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

//https://calm-savannah-35908.herokuapp.com/

/*

git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:HamidBenoum/decathproductapp.git
git push -u origin master


*/
