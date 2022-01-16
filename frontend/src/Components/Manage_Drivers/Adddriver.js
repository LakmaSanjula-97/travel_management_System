import React, {useState} from 'react';
import axios from "axios";
import '../../Styles/managejourney.css';
import Image10 from '../../Images/busDriverimg.jpg'
import {useHistory} from 'react-router-dom';

export default function AddDriver() {


    const [driver_name, setDriver_name,] = useState("");
    const [driver_id, setDriver_id] = useState("");
    const [bdate, setBdate] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [reg_date, setReg_date] = useState("");
    
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newDriver ={

            driver_name,
            driver_id,
            bdate,
            phone_no,
            reg_date

        }

        

        axios.post("http://localhost:8070/driver/add", newDriver).then(()=>{
            alert("Bus Driver Added");
            history.push('/dashboard/viewdriver');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Add Drivers
            </h2>

            <form onSubmit={sendData}  id="form_journey">


                <div className="row">
                    <label htmlFor="name">Name  </label>
                    <input type="text" className="form-control" id="driver_name" placeholder="" required
                     onChange = {(e) => {
                        setDriver_name(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="driver_id">Driver NIC No  </label>
                    <input type="text" className="form-control" id="driver_id" placeholder="" required
                     onChange = {(e) => {
                        setDriver_id(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="bdate">Date of Birth  </label>
                    <input type="date" className="form-control" id="bdate"  placeholder="" required
                    onChange = {(e) => {
                        setBdate(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="pno">Phone Number </label>
                    <input type="number" className="form-control" id="phone_no" placeholder="" required
                     onChange = {(e) => {
                        setPhone_no(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="reg_date">Registered Date  </label>
                    <input type="date" className="form-control" id="reg_date" required
                     onChange = {(e) => {
                        setReg_date(e.target.value);
                    }}  
                    />
                </div>

                


                <button type="reset"  id = "#">Reset</button>

                <button type="submit"  id = "#">Add</button>
            </form>

            <div>
                <img src={Image10} id="image10"/>
            </div> 
            
        </div>
    )
}