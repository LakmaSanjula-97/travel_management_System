import React, {useState} from 'react';
import axios from "axios";
import '../../Styles/managebusroute.css';
import Image8 from '../../Images/bus.JPG';
import Image3 from '../../Images/bustime.png';
import {useHistory} from 'react-router-dom';

export default function AddTimetable() {


    const [route, setRoute] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [start_time, setStart_time] = useState("");
    const [end_time, setEnd_time] = useState("");
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newTimetable ={

            route,
            from,
            to,
            start_time,
            end_time

        }

        
        //timetable route
        axios.post("http://localhost:8070/timetable/add", newTimetable).then(()=>{
            alert("Bus timetable Added");

            //retrive to the all timetable details page
            history.push('/dashboard/viewTimetable');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className="form_route">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Add Timetable
                </h2>

            {/* Add time table details pade */}
            <form onSubmit={sendData} id="form_route">
                

                <div className="row">
                    <label htmlFor="route" class="ftext">Route : </label>
                    <input type="text" className="form-control" id="route" placeholder="" required
                     onChange = {(e) => {
                        setRoute(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="busnumber" class="ftext">From : </label>
                    <input type="text" className="form-control" id="from" placeholder="" required
                     onChange = {(e) => {
                        setFrom(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from" class="ftext">To : </label>
                    <input type="text" className="form-control" id="to"  placeholder="" required
                    onChange = {(e) => {
                        setTo(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">Start Time : </label>
                    <input type="text" className="form-control" id="start_time" placeholder="" required
                     onChange = {(e) => {
                        setStart_time(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">End Time : </label>
                    <input type="text" className="form-control" id="end_time" placeholder="" required
                     onChange = {(e) => {
                        setEnd_time(e.target.value);
                    }}
                    />
                </div>


                    {/* reset data button */}
                <button type="reset"  id = "#">Clear</button>

                    {/* ADD button */}
                <button type="submit" id = "#">Add</button>
            </form>
                    {/* image insert part */}
            <div>
                <img src={Image8} id="image8"/>
            </div>
            <div>
                <img src={Image3} id="image3"/>
            </div>
            
        </div>
    )
}