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
import { sign } from 'jsonwebtoken';
import { db } from '../../databases/dbconnection';

export async function signup(req, res) {
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

export async function signin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });
    
    if (!customer || !(await compare(password, customer.password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    
    res.status(201).json({message:'success' , result})
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getSpecificUser(req, res) {
  try {
    const customer = await get().collection('customers').findOne({ _id: new ObjectId(req.params.id) });
    if (!customer) {
      return res.status(404).send();
    }
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getAllUsers(req, res) {
  try {
    const customers = await get().collection('customers').find().toArray();
    res.send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateUser(req, res) {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await hash(updates.password, 8);
    }
    
    const result = await get().collection('customers').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: updates },
      { returnOriginal: false }
    );
    
    if (!result.value) {
      return res.status(404).send();
    }
    res.send(result.value);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteUser(req, res) {
  try {
    const result = await get().collection('customers').findOneAndDelete({ _id: new ObjectId(req.params.id) });
    if (!result.value) {
      return res.status(404).send();
    }
    res.send(result.value);
  } catch (error) {
    res.status(500).send(error);
  }
}
