import express from "express";
import { category } from '../models/category.model.js'
export const routes = express.Router();

//  Create category
const addCategory = async(req, res) =>{

    let category_info = { 
        description: req.body.description
    }; 

    try {
        await category.create(category_info)
        .then((item) => res.status(201).send(item))
         
        // await category.save()
        console.log(req.body);

        // return category
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

// Get all categories
const getAllCategories = async(req, res) => {
    await category.findAll()
    .then(items =>{ 
        console.log(items)
        res.status(200)
        res.send(items)
    })
    .catch(err => console.log(err))
 }

//  Get category by id
const getOneCategory = async(req, res) => {
    const one = await category.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof category); // true
        console.log(one); // select category
        res.status(200).send(one)
    }
}

// Update category by id
const updateCategory = async(req, res) => {
    const one = await category.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof category); // true
        console.log(one); // select category
        res.status(200).send(one)
    }
}

// Delete category by id
const deleteCategory = async(req, res) => {
    const one = await category.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
}

exports = {
    addCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory
}