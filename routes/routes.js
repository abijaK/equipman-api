import express from "express";
import { user } from '../models/users.models.js';
// import { createUser } from "../controllers/user.ctrl.js";

export const routes = express.Router();

routes.get('/', (req, res) => res.send('Welcome!'))

// Get users
routes.get('/api/users', async(req, res) => {
    const users =  await user.findAll()
    .then(user =>{ console.log(user)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
 })

//  Get user
routes.get('/api/users/:userID', async(req, res) => {
    const id = Number(req.params.params.userID)
    const user = user.find(user => user.id === id)
    console.log(id);
    console.log(user);
    res.send(user);
 })

//  Create user
routes.post('/add/user', async(req, res) =>{

    let user_info = { 
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email, 
        password: req.body.password, 
        telephone: req.body.telephone,
        active: req.body.active,
        admin: req.body.admin 
    }; 

    try {
        await user.create(user_info)
        .then((use) => res.status(201).send(use))
         
        await user.save()
        console.log(req.body);

        // return user
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
})