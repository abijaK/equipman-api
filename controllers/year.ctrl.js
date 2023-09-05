import express from "express";
import { year } from '../models/year.model.js'
export const routes = express.Router();

//  Create year
const addYear = async(req, res) =>{

    let year_info = { 
        year: req.body.year
    }; 

    try {
        await year.create(year_info)
        .then((item) => res.status(201).send(item))
         
        // await year.save()
        console.log(req.body);

        // return year
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

// Get all categories
const getAllYears = async(req, res) => {
    await year.findAll()
    .then(items =>{ 
        console.log(items)
        res.status(200)
        res.send(items)
    })
    .catch(err => console.log(err))
 }

//  Get year by id
const getOneYear = async(req, res) => {
    const one = await year.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof year); // true
        console.log(one); // select year
        res.status(200).send(one)
    }
}

// Update year by id
const updateYear = async(req, res) => {
    const one = await year.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof year); // true
        console.log(one); // select year
        res.status(200).send(one)
    }
}

// Delete year by id
const deleteYear = async(req, res) => {
    const one = await year.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
}

exports = {
    addYear,
    getAllYears,
    getOneYear,
    updateYear,
    deleteYear
}