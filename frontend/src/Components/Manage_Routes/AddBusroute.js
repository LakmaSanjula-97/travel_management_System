import React, {useState} from 'react';
import axios from "axios";
import '../../Styles/managebusroute.css';
import Image1 from '../../Images/bus_route_image.png'
import {useHistory} from 'react-router-dom';

export default function AddBusroute() {


    const [route_name, setRoute_name] = useState("");
    const [bus_no, setBus_no] = useState("");
    const [route_from, setRoute_from] = useState("");
    const [route_to, setRoute_to] = useState("");
    const [cost, setCost] = useState("");
   
    const history = useHistory();



    function sendData(e){
        e.preventDefault();
        
        const newBusroute ={

            route_name,
            bus_no,
            route_from,
            route_to,
            cost

        }

        

        axios.post("http://localhost:8070/busroute/add", newBusroute).then(()=>{
            alert("Bus Route Added");

            history.push('/dashboard/viewBusroute');

            
        }).catch((err)=>{
            alert(err)
        })


       

    }

    return(

        <div className="form_route">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Add Bus Routes
                </h2>

            <form onSubmit={sendData} id="form_route">
                

                <div className="row">
                    <label htmlFor="route" class="ftext">Route  </label>
                    <input type="text" className="form-control" id="route_name" placeholder="Route" required
                     onChange = {(e) => {
                        setRoute_name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="busnumber" class="ftext">Bus Number  </label>
                    <input type="text" className="form-control" id="bus_no" placeholder="Bus Number" required
                     onChange = {(e) => {
                        setBus_no(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from" class="ftext">Route From  </label>
                    <input type="text" className="form-control" id="route_from"  placeholder="From" required
                    onChange = {(e) => {
                        setRoute_from(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">Route to  </label>
                    <input type="text" className="form-control" id="route_to" placeholder="To" required
                     onChange = {(e) => {
                        setRoute_to(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="cost" class="ftext">Cost  </label>
                    <input type="text" className="form-control" id="cost" placeholder="Cost" required
                     onChange = {(e) => {
                        setCost(e.target.value);
                    }}  
                    />
                </div>


                <button type="reset"  id = "#">Reset</button>

                <button type="submit" id = "#">Add</button>
            </form>

            <div>
                <img src={Image1} id="image1"/>
            </div>
            
        </div>
    )
}