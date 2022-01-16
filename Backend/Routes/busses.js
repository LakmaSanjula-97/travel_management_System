const router = require("express").Router();
const { response } = require("express");
let Bus = require("../Models/Bus");

//http://Localhost:8070/bus/add
router.route("/add").post((req, res) =>{
    
    const busNo = req.body.busNo;
    const busName = req.body.busName;
    const model =  req.body.model;
    const capasity = Number(req.body.capasity);
    const status = req.body.status; 
    

    const newBus = new Bus ({
        busNo,
        busName,
        model,
        capasity,
        status
       
    })

    newBus.save().then(()=> {
        res.json("Bus Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    Bus.find().then((busses)=>{
        res.json(busses)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const {busNo, busName, model, capasity, status} = req.body;

    const updateBus = {
        busNo,
        busName,
        model,
        capasity,
        status
       
    }

    const update = await Bus.findByIdAndUpdate(userId, updateBus).then(() => {

        res.status(200).send({status: "Bus Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Bus.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Bus Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  bus data!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const busdata = await Bus.findById(userId).then((bus) => {
        res.status(200).send({status: "bus fetched", bus});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;