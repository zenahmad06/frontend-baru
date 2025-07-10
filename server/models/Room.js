//import
const mongoose = require('/mongoose');
const {Schema} = mongoose;

//buat shema
const roomSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
})

//buat model
module.exports = new mongoose.model('Group',roomSchema)