const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busrouteSchema = new Schema({

    route_name : {

        type : String,
        required : true

    },

    bus_no : {

        type : String,
        required : true

    },

    route_from : {

        type : String,
        required : true

    },

    route_to : {

        type : String,
        required : true

    },

    cost : {

        type : String,
        required : true

    },

})

const Busroute = mongoose.model("Busroute", busrouteSchema);

module.exports = Busroute;