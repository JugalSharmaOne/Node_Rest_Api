const mongoose = require('mongoose');

const DB = "mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority";;


mongoose.connect(DB)



.then((result) => {

    console.log("connect")

}).catch((err) => {

    console.log("not connect")
});