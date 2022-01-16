import React, {Component, useState} from 'react';
import axios from "axios";
import {useHistory,} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import '../../Styles/managebus.css';
import Image1 from '../../Images/bus.JPG'

const initialState = {
    busNo: '',
    busName: '',
    model: '',
    capasity:'',
    status:'',
    busNoError:'',
    busNameError:'',
    busModelError:'',
    busCapasityError:'',
    busStatusError:''
}



toast.configure()
class AddBus extends Component {
    constructor(props){
        super(props)

        this.state = initialState;

        this.changebusNoHandler= this.changebusNoHandler.bind(this);
        this.changebusNameHandler= this.changebusNameHandler.bind(this);
        this.changemodelHandler= this.changemodelHandler.bind(this);
        this.changecapasityHandler= this.changecapasityHandler.bind(this);
        this.changestatusHandler= this.changestatusHandler.bind(this);
        

    }
    notify(){
        toast.warn('Bus Added Successfully!', {position: toast.POSITION.TOP_CENTER})

    }

    


    // const [busNo, setBusNo] = useState("");
    // const [busName, setBusName] = useState("");
    // const [model, setModel] = useState("");
    // const [capasity, setCapasity] = useState("");
    // const [status, setStatus] = useState("");
    // const history = useHistory();
    // const [busNoError, setbusNoError] = useState("");
    // const [busNameError, setbusNameError] = useState("");
    // const [busModelError, setbusModelError] = useState("");
    // const [busCapasityError, setbusCapasityError] = useState("");
    // const [busStatusError, setbusStatusError] = useState("");

    validate =()=>{ 
       let busNoError = "";
       let busNameError =  "";
       let busModelError =  "";
       let busCapasityError =  "";
       let busStatusError =  "";
          

          
          if(!this.state.busNo) {
            busNoError ='Bus no is Required';
          }
          if(!this.state.busName) {
            busNameError='Bus Name is Required';
          }
          if(!this.state.model) {
            busModelError= 'Model is Required';
          }
          if(!this.state.capasity) {
            busCapasityError= 'Capasity is Required';
          }
          if(!this.state.status) {
            busStatusError ='Status is Required';
          }
          
          if (busNoError || busNameError || busModelError || busCapasityError || busStatusError ){
              this.setState({busNoError , busNameError, busModelError, busCapasityError, busStatusError});
              return false;
          }

          return true;

    };
    
    
    sendData = (e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            
        
            const newBus ={

                busNo:this.state.busNo,
                busName:this.state.busName,
                model:this.state.model,
                capasity:this.state.capasity,
                status:this.state.status

            }

            

            axios.post("http://localhost:8070/bus/add", newBus).then(()=>{
                alert("Bus Added")
                this.notify();
                this.props.history.push('/viewBus');

                
            }).catch((err)=>{
                alert(err)
            })

            
        }
        
    };
    changebusNoHandler = (event) => {
        this.setState({busNo: event.target.value});
    }
    changebusNameHandler =(event) => {
        this.setState({busName: event.target.value});
    }
    changemodelHandler = (event) => {
        this.setState({model: event.target.value});
    }
    changecapasityHandler = (event) => {
        this.setState({capasity: event.target.value});
    }
    changestatusHandler = (event) => {
        this.setState({status: event.target.value});
    }
    



    render(){
        return(

            <div className ="form_bus" >

                <br></br>
                <br></br>
                <h2 id="headertext1">
                        Add Buses 
                    </h2>

                <form onSubmit={this.sendData} id="form_bus">

                    

                    <div className="row">
                        <label htmlFor="busnumber" class="ftext">Bus Number </label>
                        <input type="text" className="form-control" id="busNo" placeholder="Bus Number"  value={this.state.busNo}
                        onChange ={
                            this.changebusNoHandler
                        }  
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>{this.state.busNoError}</div>
                    </div>

                    <div className="row">
                        <label htmlFor="busname" class="ftext">Bus Name </label>
                        <input type="text" className="form-control" id="busName" placeholder="Bus Name" value={this.state.busName}
                        onChange = {
                            this.changebusNameHandler
                        } 
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>{this.state.busNameError}</div>
                    </div>

                    <div className="row">
                        <label htmlFor="model">Model </label>
                        <select style ={{height:"1cm"}} className="form-control" id="model" value={this.state.model} onChange = {
                                this.changemodelHandler
                            }>
                            <option>Select Model</option>
                            <option value="TATA">TATA</option>
                            <option value="ISUZU">ISUZU</option>
                            <option value="Ashok Leyland">Ashok Leyland</option>
                            
                        </select>
                        <div style ={{fontSize:"14px", color:"red"}}>{this.state.busModelError}</div>
                    </div>

                    <div className="row">
                        <label htmlFor="capasity">Capasity </label>
                        <input type="number" className="form-control" id="capasity" placeholder="Capasity"  value={this.state.capasity}
                        onChange = {
                            this.changecapasityHandler
                        }
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>{this.state.busCapasityError}</div>
                    </div>

                    <div className="row">
                        <label htmlFor="status">Status </label>
                        <input type="text" className="form-control" id="status"  placeholder="Status" value={this.state.status}
                        onChange = {
                            this.changestatusHandler
                        }  
                        />
                        <div style ={{fontSize:"14px", color:"red"}}>{this.state.busStatusError}</div>
                    </div>

                    


                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit"  id = "#">Add</button>
                </form>

                <div>
                    <img  src={Image1} id="image"/>
                </div>
            </div>
        );  
    }
}
export default AddBus;