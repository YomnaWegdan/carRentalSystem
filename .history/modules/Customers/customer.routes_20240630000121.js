const getAllCustomer = async (req , res)=>{
    let user = await db.collection('customer').find().toArray()
    res.json({message:'success' , user})
}

const getOneUser = async (req , res)=>{
    let user = await db.collection('users').findOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , user})
}

const addUser = async (req , res)=>{
    let user = await db.collection('users').insertOne(req.body)
    res.json({message:'success' , user})
}

const updateUser = async (req , res)=>{
    let user = await db.collection('users').updateOne({_id:new ObjectId(req.params.id)} , {$set:req.body})
    res.json({message:'success' , user})
}

const deleteUser = async (req , res)=>{
    let user = await db.collection('users').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , user})
}

export {
    addUser, updateUser , deleteUser , getAllUser , getOneUser
}