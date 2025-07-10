//import
const mongoose = require('mongoose');
const {Schema} = mongoose;

//buat shema
const UserSchema = new Schema({
    name:String,
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
},{
    timestamps:true,
})

//buat model
module.exports = new mongoose.model('User',UserSchema)