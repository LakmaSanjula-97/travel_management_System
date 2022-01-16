const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journeySchema = new Schema({

    journey_route : {

        type : String,
        required : true

    },

    passenger_id : {

        type : String,
        required : true

    },

    journey_from : {

        type : String,
        required : true

    },

    journey_to : {

        type : String,
        required : true

    },

    start_time : {

        type : String,
        required : true

    },
    
    end_time : {

        type : String,
        required : true

    },
})

const Journey = mongoose.model("Journey", journeySchema);

module.exports = Journey;