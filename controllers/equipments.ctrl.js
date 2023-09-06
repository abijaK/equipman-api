import express from "express";
import { equipment } from '../models/equipments.model.js'
export const routes = express.Router();

//  Create equipment
const addEquipment = async(req, res) =>{

    let equipment_info = { 
        designation: req.body.designation,
        model: req.body.model, 
        marque: req.body.marque, 
        category: req.body.category, 
        description: req.body.description,
        dateAquisition: req.body.dateAquisition
    }; 

    try {
        await equipment.create(equipment_info)
        .then((item) => res.status(201).send(item))
        
        // await equipment.save()
        console.log(req.body);
        
        // return equipment
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

// Get all equipments
const getAllEquipments = async(req, res) => {
    await equipment.findAll()
    .then(items =>{ 
        console.log(items)
        res.status(200)
        res.send(items)
    })
    .catch(err => console.log(err))
 }

//  Get equipment by id
const getOneEquipment = async(req, res) => {
    const one = await equipment.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof user); // true
        console.log(one); // select equipment
        res.status(200).send(one)
    }
}

// Update equipment by id
const updateEquipment = async(req, res) => {
    const one = await equipment.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof equipment); // true
        console.log(one); // select equipment
        res.status(200).send(one)
    }
}

// Delete equipment by id
const deleteEquipment = async(req, res) => {
    const one = await equipment.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
}

exports = {
    addEquipment,
    getAllEquipments,
    getOneEquipment,
    updateEquipment,
    deleteEquipment
}