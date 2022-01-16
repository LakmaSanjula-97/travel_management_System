import React, {useState} from 'react';
import axios from "axios";
import '../../Styles/managejourney.css';
import Image1 from '../../Images/journey_img1.png'
import {useHistory} from 'react-router-dom';

export default function AddJourney() {


    const [journey_route, setJourney_route,] = useState("");
    const [passenger_id, setPassenger_id] = useState("");
    const [journey_from, setJourney_from] = useState("");
    const [journey_to, setJourney_to] = useState("");
    const [start_time, setStart_time] = useState("");
    const [end_time, setEnd_time] = useState("");
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newJourney ={

            journey_route,
            passenger_id,
            journey_from,
            journey_to,
            start_time,
            end_time

        }

        // add route for the journey details

        axios.post("http://localhost:8070/journey/add", newJourney).then(()=>{
            alert("Bus Journey Added");
            history.push('/dashboard/viewJourney');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Add Journey
            </h2>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey">


                <div className="row">
                    <label htmlFor="route">Route  </label>
                    <input type="text" className="form-control" id="journey_route" placeholder="" required
                     onChange = {(e) => {
                        setJourney_route(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="passenger_id">Passenger Id  </label>
                    <input type="text" className="form-control" id="passenger_id" placeholder="" required
                     onChange = {(e) => {
                        setPassenger_id(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from">From  </label>
                    <input type="text" className="form-control" id="journey_from"  placeholder="" required
                    onChange = {(e) => {
                        setJourney_from(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to">To : </label>
                    <input type="text" className="form-control" id="journey_to" placeholder="" required
                     onChange = {(e) => {
                        setJourney_to(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="start_time">Start Time  </label>
                    <input type="text" className="form-control" id="start_time" required
                     onChange = {(e) => {
                        setStart_time(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="End_time">End Time  </label>
                    <input type="text" className="form-control" id="end_time" required
                     onChange = {(e) => {
                        setEnd_time(e.target.value);
                    }}  
                    />
                </div>

                    {/* ------reset button---- */}
                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            <div>
                <img src={Image1} id="image1"/>
            </div>
            
        </div>
    )
}