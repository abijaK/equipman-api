import userModel from '../models/users.models.js';

const createUser = async({ name, username, email, password, telephone }) =>{
    try {
        const user = await userModel.create({
            name, 
            username, 
            email, 
            password, 
            telephone 
        });

        return user
    } catch(error){
        console.log(error);
    }
}

export { createUser };