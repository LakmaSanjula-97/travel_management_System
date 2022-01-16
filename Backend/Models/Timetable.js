const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TimetableSchema = new Schema({

    route : {

        type : String,
        required : true

    },

    from : {

        type : String,
        required : true

    },

    to : {

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

    }
})

const Timetable = mongoose.model("Timetable", TimetableSchema);

module.exports = Timetable;