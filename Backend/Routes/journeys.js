const router = require("express").Router();
const { response } = require("express");
let Journey = require("../Models/Journey");

//http://Localhost:8070/journey/add
router.route("/add").post((req, res) =>{
    
    const journey_route = req.body.journey_route;
    const passenger_id = req.body.passenger_id;
    const journey_from =  req.body.journey_from;
    const journey_to = req.body.journey_to;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time; 

    const newJourney = new Journey ({
        journey_route,
        passenger_id,
        journey_from,
        journey_to,
        start_time,
        end_time
    })

    newJourney.save().then(()=> {
        res.json("Journey Details Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    Journey.find().then((journey)=>{
        res.json(journey)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { journey_route,passenger_id,journey_from,journey_to,start_time,end_time} = req.body;

    const updateJourney = {
        journey_route,
        passenger_id,
        journey_from,
        journey_to,
        start_time,
        end_time
    }

    const update = await Journey.findByIdAndUpdate(userId, updateJourney).then(() => {

        res.status(200).send({status: "Journey Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Journey.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Journey Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Journey!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const journeydata = await Journey.findById(userId).then((journey) => {
        res.status(200).send({status: "journey details fetched", journey});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;