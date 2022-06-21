const mongoose = require('mongoose');



const restapi = new mongoose.Schema({


    name: {

        type: String,
        unique: true,
    },

    age: {
        type: Number,


    },

    country: {
        type: String,


    },

    gender: {
        type: String,

    }

})


const Regsiter = new mongoose.model("Rest", restapi);



module.exports = Regsiter;