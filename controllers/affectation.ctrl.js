import express from "express";
import { affectation } from '../models/affectation.model.js'
export const routes = express.Router();

//  Create affectation
const addAffectation = async(req, res) =>{

    let affectation_info = { 
        state: req.body.state,
        idEquipFk: req.body.idEquipFk,
        description: req.body.description, 
        idServiceFk: req.body.idServiceFk, 
        amortizationPeriod: req.body.amortizationPeriod, 
        yearAffectation: req.body.yearAffectation,
        dateAffectation: req.body.dateAffectation
    }; 

    try {
        await affectation.create(affectation_info)
        .then((item) => res.status(201).send(item))
         
        // await affectation.save()
        console.log(req.body);

        // return affectation
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

// Get all affectations
const getAllAffectations = async(req, res) => {
    await affectation.findAll()
    .then(items =>{ 
        console.log(items)
        res.status(200)
        res.send(items)
    })
    .catch(err => console.log(err))
 }

//  Get affectation by id
const getOneAffectation = async(req, res) => {
    const one = await affectation.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof affectation); // true
        console.log(one); // select affectation
        res.status(200).send(one)
    }
}

// Update affectation by id
const updateAffectation = async(req, res) => {
    const one = await affectation.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof affectation); // true
        console.log(one); // select affectation
        res.status(200).send(one)
    }
}

// Delete affectation by id
const deleteAffectation= async(req, res) => {
    const one = await affectation.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
}

exports = {
    addAffectation,
    getAllAffectations,
    getOneAffectation,
    updateAffectation,
    deleteAffectation
}