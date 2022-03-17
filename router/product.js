const express = require('express');
const { listProduct, listProductDetail, createProduct, deleteProduct, updateProduct } = require('../controllers/products');
const router = express.Router();



router.get('/products', listProduct);

router.get('/products/:id', listProductDetail);

router.post('/products', createProduct);

router.delete('/products/:id', deleteProduct);

router.put('/products/:id', updateProduct);

export default router;