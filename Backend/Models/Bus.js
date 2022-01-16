const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busSchema = new Schema({

    busNo : {
        type : String,
        required: true,
        unique : true
        
    },
    busName : {
        type : String,
        required: true
    },
    model : {
        type : String,
        required: true
    },
    capasity : {
        type : Number,
        requir: true
    },
    status : {
        type : String,
        required: true
    }
    

})

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;