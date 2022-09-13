// import controller to use the model that were created
const ProductManager = require("../controllers/products.controller")
const Product = require("../models/products.model")

// Controller is calling the WHOLE THING and the 2nd param will envoke a certain function
module.exports = (app) => {
    app.post("/api/newProduct",ProductManager.createProduct)
    app.get("/api/products",ProductManager.findAll)
    app.delete("/api/product/delete/:id",ProductManager.deleteProduct)
    app.get("/api/product/:id",ProductManager.findOneProduct)
}