import { ObjectId } from 'mongodb';
import { hash } from 'bcryptjs';
import { db } from '../../databases/dbconnection.js';
import bcrypt from 'bcrypt';

const signup = async (req , res)=>{
    try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

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

    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(400).json({ message: 'Invalid credentials' });
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
     updateUser , deleteUser , getAllUser , getOneUser , signin , signup
}