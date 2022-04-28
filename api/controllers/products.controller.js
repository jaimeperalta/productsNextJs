'use strict'
const { MongoClient } = require("mongodb");

const uri =
    "mongodb+srv://jaime:imagemaker@cluster0.f2tzw.mongodb.net/Inventory?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const getProducts = async (req, res) => {

    const products = await searchProducts();
    res.status(200).send({
        status: "success",
        products
    })
}

const getProductByName = async (req, res) => {
    const products = await searchByName(req.params.name);
    res.status(200).send({
        status: "success",
        products
    })
}

const insertProduct = async (req, res) => {
    await createProduct(req.body);
    res.status(200).send({
        status: "success"
    })
}

const searchProducts = async () => {
    let products = [];
    try {
        await client.connect();
        const database = client.db('Inventory');
        const productsList = database.collection('products');
        products = await productsList.find().toArray();
    } finally {
        await client.close();
        return products;
    }
};

const searchByName = async (name) => {
    let products = [];
    try {
        await client.connect();
        const database = client.db('Inventory');
        const productsList = database.collection('products');
        const query = { name: { "$regex": name, "$options": "i" } };
        products = await productsList.find(query).toArray();
    } finally {
        await client.close();
        return products;
    }
};

const createProduct = async (product) => {
    try {
        await client.connect();
        const database = client.db('Inventory');
        const collection =  database.collection('products');
        await collection.insertOne(product)
    }
    finally {
        await client.close();
        return;
    }
}

module.exports = {
    getProducts,
    getProductByName,
    insertProduct
}
