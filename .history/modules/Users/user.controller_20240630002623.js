// const getAllUser = async (req , res)=>{
//     let user = await db.collection('users').find().toArray()
//     res.json({message:'success' , user})
// }

// const getOneUser = async (req , res)=>{
    // let user = await db.collection('users').findOne({_id:new ObjectId(req.params.id)})
//     res.json({message:'success' , user})
// }

// const addUser = async (req , res)=>{
//     let user = await db.collection('users').insertOne(req.body)
//     res.json({message:'success' , user})
// }

// const updateUser = async (req , res)=>{
//     let user = await db.collection('users').updateOne({_id:new ObjectId(req.params.id)} , {$set:req.body})
//     res.json({message:'success' , user})
// }

// const deleteUser = async (req , res)=>{
//     let user = await db.collection('users').deleteOne({_id:new ObjectId(req.params.id)})
//     res.json({message:'success' , user})
// }

// export {
//     addUser, updateUser , deleteUser , getAllUser , getOneUser
// }





import { ObjectId } from 'mongodb';
import { hash, compare } from 'bcryptjs';
import { db } from '../../databases/dbconnection';

const signup = async (req , res)=>{
    try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await hash(password, 8);
    const user = { name, email, phone, password: hashedPassword };
    const result = await db.collection('users').insertOne(user);
    res.status(201).json({message:'success' , result})
} catch (error) {
    res.status(400).send(error);
  }
}

const signin = async (req , res)=>{
    try {
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });
    
    if (!user || !(await compare(password, user.password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    
    res.status(201).json({message:'success' , user})
  } catch (error) {
    res.status(500).send(error);
  }
}

const getOneUser = async (req , res)=>{
    try {
    let user = await db.collection('users').findOne({_id:new ObjectId(req.params.id)})
    if (!customer) {
        return res.status(404).send();
    }
    res.json({message:'success' , user})
    } catch (error) {
        res.status(500).send(error);
    }
    }


const getAllUser = async (req , res)=>{
        try{
            let user = await db.collection('users').find().toArray()
            res.json({message:'success' , user})
        }
        catch(error){    
            res.status(500).send(error);
        }
    }

const updateUser = async (req , res)=>{
    try {

    let user = await db.collection('users').updateOne({_id:new ObjectId(req.params.id)} , {$set:req.body})
    res.json({message:'success' , user})
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteUser = async (req , res)=>{
    try {
    let user = await db.collection('users').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , user})
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    addUser, updateUser , deleteUser , getAllUser , getOneUser , signin , signup
}