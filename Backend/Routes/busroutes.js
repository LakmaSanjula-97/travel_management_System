const router = require("express").Router();
const { response } = require("express");
let Busroute = require("../Models/Busroute");

//http://Localhost:8070/busroute/add
router.route("/add").post((req, res) =>{
    
    const route_name = req.body.route_name;
    const bus_no = req.body.bus_no;
    const route_from =  req.body.route_from;
    const route_to = req.body.route_to;
    const cost = req.body.cost; 

    const newBusroute = new Busroute ({
        route_name,
        bus_no,
        route_from,
        route_to,
        cost
    })

    newBusroute.save().then(()=> {
        res.json("Bus Route Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data bus router

router.route("/").get((req, res) => {

    Busroute.find().then((busroutes)=>{
        res.json(busroutes)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const {route_name, bus_no, route_from, route_to, cost} = req.body;

    const updateBusroute = {
        route_name,
        bus_no,
        route_from,
        route_to,
        cost
    }

    const update = await Busroute.findByIdAndUpdate(userId, updateBusroute).then(() => {

        res.status(200).send({status: "Bus route Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Busroute.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Bus Route Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Bus route!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const busroutedata = await Busroute.findById(userId).then((busroute) => {
        res.status(200).send({status: "bus route fetched", busroute});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;