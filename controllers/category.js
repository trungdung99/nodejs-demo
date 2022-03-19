import { response } from "express"
import { request } from "express"
import Category from "../models/category"

export const listCategory = async (request, response) => {
    try {
        const category = await Category.find({}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message: "Khong the list san pham"})
    }
}
export const listCategoryDetail = async (request, response) => {
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message: "Khong the tim thay san pham"})
    }
}
export const createCategory = async (request, response) => {
    try {
        const category = await Category(request.body).save()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong the them san pham"})
    }
}
export const deleteCategory = async (request, response)=> {
    try {
        const category = await Category.findOneAndDelete({_id: request.params.id}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong the xoa san pham"})
    }
}
export const updateCategory = async (request, response)=> {
    try {
        const category = await Category.findOneAndUpdate({_id: request.params.id}, request.body, {new: true}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong the sua san pham"})
    }
}