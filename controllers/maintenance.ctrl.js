import express from "express";
import { maintenance } from '../models/maintenance.model.js'
export const routes = express.Router();

//  Create maintenance
const addMaintenance = async(req, res) =>{

    let maintenance_info = { 
        motif: req.body.motif,
        operateur: req.body.operateur, 
        description: req.body.description, 
        date: req.body.date
    }; 

    try {
        await maintenance.create(maintenance_info)
        .then((item) => res.status(201).send(item))
         
        // await maintenance.save()
        console.log(req.body);

        // return maintenance
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

// Get all maintenances
const getAllMaintenances = async(req, res) => {
    await maintenance.findAll()
    .then(items =>{ 
        console.log(items)
        res.status(200)
        res.send(items)
    })
    .catch(err => console.log(err))
 }

//  Get maintenance by id
const getOneMaintenance = async(req, res) => {
    const one = await maintenance.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof user); // true
        console.log(one); // select maintenance
        res.status(200).send(one)
    }
}

// Update maintenance by id
const updateMaintenance = async(req, res) => {
    const one = await maintenance.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof maintenance); // true
        console.log(one); // select maintenance
        res.status(200).send(one)
    }
}

// Delete maintenance by id
const deleteMaintenance = async(req, res) => {
    const one = await maintenance.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
}

exports = {
    addMaintenance,
    getAllMaintenances,
    getOneMaintenance,
    updateMaintenance,
    deleteMaintenance
}