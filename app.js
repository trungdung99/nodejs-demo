// Bước 1: include thư viện http
// const express = require('express');
import express from "express";
import homeRoute from './router/home';
import productRoute from './router/product';
import newsRoute from './router/news';
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(homeRoute);
app.use("/api",productRoute);
app.use(newsRoute);

mongoose.connect('mongodb://localhost:27017/we16307');
// Bước 3: lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});