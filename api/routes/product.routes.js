'use strict'

const express = require('express');
const cors = require('cors');
const router = express.Router();
const controller = require('../controllers/products.controller')

router.use(express.json());
router.use(express.urlencoded({
    extended:false
}))
router.use(cors());

router.get("/",controller.getProducts);
router.get("/:name",controller.getProductByName);
router.post("/",controller.insertProduct);

module.exports = router;
