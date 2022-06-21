const express = require('express');

require("./db/conn")

const Regsiter = require("./model/student")
const app = express();

const port = process.env.PORT || 9000;

app.use(express.json());



app.get("", (req, res) => {


    res.send("hello jugal")

})

//post  we will handle post request create 



app.post("/Post", async(req, res) => {


    try {

        const Rest = new Regsiter(req.body);

        console.log(req.body);

        const inser = await Rest.save();

        res.send(inser)




    } catch (e) {


        res.status(422).json({ error: "not susscfull" })

    }

})





//get we will handle get request get


app.get("/info", async(req, res) => {


    try {

        const getInfo = await Regsiter.find({}).sort({ "id": 1 })

        res.send(getInfo)




    } catch (e) {


        res.status(422).json({ error: "not susscfull" })

    }

})



//get id info from


app.get("/info", async(req, res) => {


    try {

        const getInfo = await Regsiter.find({})

        res.send(getInfo)




    } catch (e) {


        res.status(422).json({ error: "not susscfull" })

    }

})


//new get info indi=v

app.get("/infos/:id", async(req, res) => {


    try {


        const _id = req.params.id;
        const getInf = await Regsiter.findById(_id)

        res.send(getInf)




    } catch (e) {


        res.status(422).json({ error: "not susscfull" })

    }

})


//update we will handle update request put patch


//patch one signle update


app.patch("/infos/:id", async(req, res) => {


    try {


        const _id = req.params.id;
        const getInf = await Regsiter.findByIdAndUpdate(_id, req.body, {

            new: true,

        })

        res.send(getInf)




    } catch (e) {


        res.status(500).json({ error: "not susscfull" })

        console.log(e)
    }

})



//delete we will handle delete request delete
app.delete("/infos/:id", async(req, res) => {



        try {


            const getInf = await Regsiter.findByIdAndDelete(req.params.id)

            res.send(getInf)
        } catch (error) {

            res.status(500).send(error)
        }
    })
    //last row class line
app.listen(port, () => {


    console.log("this is port number" + port)

})