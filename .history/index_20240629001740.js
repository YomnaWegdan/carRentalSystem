import express from 'express'
import { db } from './databases/dbconnection.js';
import userRouter from './modules/users/user.routes.js';

const app = express()
const port = 3000

app.use(express.json())
app.use('/cars' , userRouter)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))