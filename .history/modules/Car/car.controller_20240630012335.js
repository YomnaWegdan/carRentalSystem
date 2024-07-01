import { ObjectId } from "mongodb"
import { db } from "../../databases/dbconnection.js"


const getAllCars = async (req , res)=>{
    let cars = await db.collection('cars').find().toArray()
    res.json({message:'success' , cars})
}

const getOneCar = async (req , res)=>{
    let cars = await db.collection('cars').findOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , cars})
}

const addCar = async (req , res)=>{
    const {}
    
    let car = await db.collection('cars').insertOne(req.body)
    res.json({message:'success' , car})
}

const updateCar = async (req , res)=>{
    let car = await db.collection('cars').updateOne({_id:new ObjectId(req.params.id)} , {$set:req.body})
    res.json({message:'success' , car})
}

const deleteCar = async (req , res)=>{
    let car = await db.collection('cars').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , car})
}

export {
    addCar, updateCar , deleteCar , getAllCars , getOneCar
}