import express from 'express'
import { db } from './databases/dbconnection.js';
import userRouter from './modules/Car/car.routes.js';

const app = express()
const port = 3000

app.use(express.json())
app.use('/cars' , userRouter)
app.use('/users' , userRouter)




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))