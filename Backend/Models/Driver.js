const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({

    driver_name : {

        type : String,
        required : true

    },

    driver_id : {

        type : String,
        required : true

    },

    bdate : {

        type : String,
        required : true

    },

    phone_no : {

        type : String,
        required : true

    },

    reg_date: {

        type : String,
        required : true

    }
})

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;