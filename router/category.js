const express = require('express');
const { listCategory, listCategoryDetail, createCategory, deleteCategory, updateCategory } = require('../controllers/category');
const router = express.Router();



router.get('/category', listCategory);

router.get('/category/:id', listCategoryDetail);

router.post('/category', createCategory);

router.delete('/category/:id', deleteCategory);

router.put('/category/:id', updateCategory);

export default router;