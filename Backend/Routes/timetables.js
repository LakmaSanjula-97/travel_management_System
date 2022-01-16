const router = require("express").Router();
const { response } = require("express");
let Timetable = require("../Models/Timetable");


router.route("/add").post((req, res) =>{
    
    const route = req.body.route;
    const from = req.body.from;
    const to =  req.body.to;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;

    const newTimetable = new Timetable ({
        route,
        from,
        to,
        start_time,
        end_time
    })

    newTimetable.save().then(()=> {
        res.json("Timetable Details Added")
    }).catch((err) => {
        console.log(err);
    })

})

// fetch data

router.route("/").get((req, res) => {

    Timetable.find().then((Timetable)=>{
        res.json(Timetable)
    
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //d structure
    const { route, from, to, start_time, end_time} = req.body;

    const updateTimetable = {
        route,
        from,
        to,
        start_time,
        end_time
    }

    const update = await Timetable.findByIdAndUpdate(userId, updateTimetable).then(() => {

        res.status(200).send({status: "Timetable Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

//delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Timetable.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Timetable Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete  Journey!", error:err.message})
    })
})

//get one  data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const Timetables = await Timetable.findById(userId).then((timetable) => {
        res.status(200).send({status: "Timetable details fetched", timetable});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



module.exports = router;