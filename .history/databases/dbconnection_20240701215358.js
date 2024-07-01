import { MongoClient } from 'mongodb'


// const client = new MongoClient('mongodb://localhost:27017/newDb');
const client = new MongoClient('mongodb://uu8eul3a8h7blvfjegql:UD0V4GVJ69fo9jSF4B16@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bdrytmxlaxgrnog?replicaSet=rs0');

client.connect().then(()=>{
    console.log('Connected successfully to server');
}).catch(()=>{
    console.log('Connected db is error');
})

export const db = client.db('newDb')
