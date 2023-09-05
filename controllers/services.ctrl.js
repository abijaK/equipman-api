import express from "express";
import { service } from '../models/service.model.js'
export const routes = express.Router();

//  Create service
const addService = async(req, res) =>{

    let service_info = { 
        description: req.body.description
    }; 

    try {
        await service.create(service_info)
        .then((item) => res.status(201).send(item))
         
        // await service.save()
        console.log(req.body);

        // return service
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
}

// Get all services
const getAllServices = async(req, res) => {
    await service.findAll()
    .then(items =>{ 
        console.log(items)
        res.status(200)
        res.send(items)
    })
    .catch(err => console.log(err))
 }

//  Get service by id
const getOneService = async(req, res) => {
    const one = await service.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof service); // true
        console.log(one); // select service
        res.status(200).send(one)
    }
}

// Update service by id
const updateService = async(req, res) => {
    const one = await service.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof service); // true
        console.log(one); // select service
        res.status(200).send(one)
    }
}

// Delete service by id
const deleteService = async(req, res) => {
    const one = await service.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
}

exports = {
    addService,
    getAllServices,
    getOneService,
    updateService,
    deleteService
}