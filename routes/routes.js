import express from "express";
import { user } from '../models/users.models.js';

export const routes = express.Router();

routes.get('/', (req, res) => res.send('Welcome to Home Page!'))

// Get all users
routes.get('/users/list', async(req, res) => {
    await user.findAll()
    .then(user =>{ 
        console.log(user)
        res.status(200)
        res.send(user)
    })
    .catch(err => console.log(err))
 })

//  Get user by id
routes.get('/users/:id', async(req, res) => {
    const one = await user.findOne({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof user); // true
        console.log(one); // select user
        res.status(200).send(one)
    }
})
//  Create user
routes.post('/users/add', async(req, res) =>{

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

// Update user by id
routes.put('/users/:id/update', async(req, res) => {
    const one = await user.update(req.body, { where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        console.log(one instanceof user); // true
        console.log(one); // select user
        res.status(200).send(one)
    }
})

// Delete user by id
routes.delete('/users/:id/delete', async(req, res) => {
    const one = await user.destroy({ where: { id: req.params.id } });
    
    if (one === null) {
        console.log('Not found!');
    } else {
        res.status(200);
        console.log('User deleted successfully!');
    }
})