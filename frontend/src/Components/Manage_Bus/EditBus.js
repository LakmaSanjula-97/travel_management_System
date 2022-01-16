import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import '../../Styles/managebus.css';
import Image1 from '../../Images/bus.JPG'

toast.configure()
export default class EditBus extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

            busNo:'',
            busName:'',
            model:'',
            capasity:'',
            status:'',
            busNoError:'',
            busNameError:'',
            busModelError:'',
            busCapasityError:'',
            busStatusError:''
            

        }

        

        this.onChangeBusNo = this.onChangeBusNo.bind(this);
        this.onChangeBusName = this.onChangeBusName.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeCapasity = this.onChangeCapasity.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);

        

    }
    notify(){
        toast.warn('Bus Updated Successfully!', {position: toast.POSITION.TOP_CENTER})

    }

    componentDidMount(){
        axios.get('http://localhost:8070/bus/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    busNo:response.data.bus.busNo,
                    busName:response.data.bus.busName,
                    model:response.data.bus.model,
                    capasity:response.data.bus.capasity,
                    status:response.data.bus.status
                    

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeBusNo(e){
        this.setState({busNo:e.target.value});
    }
    onChangeBusName(e){
        this.setState({busName:e.target.value});
    }
    onChangeModel(e){
        this.setState({model:e.target.value});
    }
    onChangeCapasity(e){
        this.setState({capasity:e.target.value});
    }
    onChangeStatus(e){
        this.setState({status:e.target.value});
    }

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
    


    onSubmit(e){
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            const obj = {
            
                
                busNo: this.state.busNo,
                busName: this.state.busName,
                model: this.state.model,
                capasity: this.state.capasity,
                status: this.state.status,
                

            };

            axios.put("http://localhost:8070/bus/update/"+this.props.match.params.id, obj)
             .then(res =>console.log(res.data),
             alert("Update Successfully"));
             this.notify();
        }

        this.props.history.push('/viewBus');
    }





    render() {
        return(
            <div className="form_bus">
                <br></br>
                <br></br>
                <h2 id="headertext1">
                        Edit Bus Details
                </h2>
            
             
                <form onSubmit={this.onSubmit} id="form_bus">

            

                    <div className="row" required>
                        <label htmlFor="busnumber">Bus Number</label>
                        <input type="text" className="form-control" id="busNo"  readOnly
                          value={this.state.busNo}
                          onChange = {this.onChangeBusNo}
                        />
                        
                    </div>

                    <div className="row" required>
                        <label htmlFor="busname">Bus Name</label>
                        <input type="text" className="form-control" id="busName" required
                         value={this.state.busName}
                         onChange = {this.onChangeBusName}
                        />
                        
                    </div>

                    <div className="row">
                        <label htmlFor="model">Model </label>
                        <select style ={{height:"1cm"}} className="form-control" id="model"  value={this.state.model} onChange = {this.onChangeModel}>
                            <option>Select Model</option>
                            <option value="TATA">TATA</option>
                            <option value="ISUZU">ISUZU</option>
                            <option value="Ashok Leyland">Ashok Leyland</option>
                            
                        </select>
                        
                    </div>


                    <div className="row" required>
                        <label htmlFor="capasity">Capasity </label>
                        <input type="text" className="form-control" id="capasity" required
                            value={this.state.capasity}
                            onChange = {this.onChangeCapasity}
                         
                        />
                        
                    </div>

                    <div className="row" required>
                        <label htmlFor="status">Status</label>
                        <input type="text" className="form-control" id="status" required
                            value={this.state.status}
                            onChange = { this.onChangeStatus}
                        />
                        
                    </div>

                    

    
                    <button type="reset" id = "#">Reset</button>
                    <button type="submit">Edit</button>
                    <br/><br/>
                </form>

                <div>
                    <img src={Image1} id="image"/>
                </div>
            </div>
            
        )
    }
}