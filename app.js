// Bước 1: include thư viện http
// const express = require('express');
import express from "express";
import homeRoute from './router/home';
import productRoute from './router/product';
import mongoose from "mongoose";
import categoryRoute from './router/category';
import authRoute from './router/auth'

const app = express();

app.use(express.json());
app.use(homeRoute);
app.use("/api",productRoute);
app.use("/api",categoryRoute);
app.use("/api", authRoute);

mongoose.connect('mongodb://localhost:27017/we16307');
// Bước 3: lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});