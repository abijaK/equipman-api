import express from "express";
import { user } from '../models/users.models.js';
// import { createUser } from "../controllers/user.ctrl.js";

export const routes = express.Router();

routes.get('/', (req, res) => res.send('Welcome!'))

// Get users
routes.get('/api/users', async(req, res) => {
    await user.findAll()
    .then(user =>{ 
        console.log(user)
        res.status(200)
        res.send(user)
    })
    .catch(err => console.log(err))
 })

//  Get user
// routes.get('/api/users/:id', async(req, res) => {
//     const id = (req.params.id)
//     const oneUser = await user.findOne({ 
//         where: { id: id }})
//         res.status(200).send(oneUser);
//  })

routes.get('/api/users/:id', async(req, res) => {
    const one = await user.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof user); // true
        console.log(one); // 'My Title'
        res.status(200).send(one)
    }
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
         
        // await user.save()
        console.log(req.body);

        // return user
    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
})