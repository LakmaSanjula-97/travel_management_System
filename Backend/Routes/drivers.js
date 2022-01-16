const router = require("express").Router();
const { response } = require("express");
let Driver = require("../Models/Driver");

//http://Localhost:8070/driver/add
router.route("/add").post((req, res) =>{
    
    const driver_name = req.body.driver_name;
    const driver_id = req.body.driver_id;
    const bdate =  req.body.bdate;
    const phone_no = req.body.phone_no;
    const reg_date = req.body.reg_date;
    
    const newDriver = new Driver ({
        driver_name,
        driver_id,
        bdate,
        phone_no,
        reg_date
        
    })

    newDriver.save().then(()=> {
        res.json("Driver Details Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    Driver.find().then((driver)=>{
        res.json(driver)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { driver_name,driver_id,bdate,phone_no,reg_date} = req.body;

    const updateDriver = {
        driver_name,
        driver_id,
        bdate,
        phone_no,
        reg_date
    }

    const update = await Driver.findByIdAndUpdate(userId, updateDriver).then(() => {

        res.status(200).send({status: "Driver Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Driver.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Driver Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Driver!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const driverdata = await Driver.findById(userId).then((driver) => {
        res.status(200).send({status: "driver details fetched", driver});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;