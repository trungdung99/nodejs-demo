import { response } from "express"
import { request } from "express"
import Products from "../models/products"

export const listProduct = async (request, response) => {
    try {
        const product = await Products.find({}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message: "Khong the list san pham"})
    }
}
export const listProductDetail = async (request, response) => {
    try {
        const product = await Products.findOne({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message: "Khong the tim thay san pham"})
    }
}
export const createProduct = async (request, response) => {
    try {
        const product = await Products(request.body).save()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Khong the them san pham"})
    }
}
export const deleteProduct = async (request, response)=> {
    try {
        const product = await Products.findOneAndDelete({_id: request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Khong the xoa san pham"})
    }
}
export const updateProduct = async (request, response)=> {
    try {
        const product = await Products.findOneAndUpdate({_id: request.params.id}, request.body, {new: true}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Khong the sua san pham"})
    }
}