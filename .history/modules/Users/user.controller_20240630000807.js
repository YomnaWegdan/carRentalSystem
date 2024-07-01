// const getAllUser = async (req , res)=>{
//     let user = await db.collection('users').find().toArray()
//     res.json({message:'success' , user})
// }

// const getOneUser = async (req , res)=>{
    let user = await db.collection('users').findOne({_id:new ObjectId(req.params.id)})
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





const { ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const customer = { name, email, phone, password: hashedPassword };
    
    const result = await db.get().collection('customers').insertOne(customer);
    res.status(201).send(result.ops[0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await db.get().collection('customers').findOne({ email });
    
    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    
    const token = jwt.sign({ _id: customer._id }, 'secret', { expiresIn: '1h' });
    res.send({ customer, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSpecificUser = async (req, res) => {
  try {
    const customer = await db.get().collection('customers').findOne({ _id: new ObjectId(req.params.id) });
    if (!customer) {
      return res.status(404).send();
    }
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const customers = await db.get().collection('customers').find().toArray();
    res.send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 8);
    }
    
    const result = await db.get().collection('customers').findOneAndUpdate(
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
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await db.get().collection('customers').findOneAndDelete({ _id: new ObjectId(req.params.id) });
    if (!result.value) {
      return res.status(404).send();
    }
    res.send(result.value);
  } catch (error) {
    res.status(500).send(error);
  }
};
