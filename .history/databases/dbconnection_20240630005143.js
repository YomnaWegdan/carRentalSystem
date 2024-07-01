import { MongoClient } from 'mongodb'


const client = new MongoClient('mongodb://localhost:27017/carRental');


client.connect().then(()=>{
    console.log('Connected successfully to server');
}).catch(()=>{
    console.log('Connected db is error');
})

export const db = client.db('newDb')
