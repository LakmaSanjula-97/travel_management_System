import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/managejourney.css';

import Image10 from '../../Images/busDriverimg.jpg'


export default class EditDriver extends Component {

    constructor(props) {
        super(props);

        

        this.onChangeDriver_name = this.onChangeDriver_name.bind(this);
        this.onChangeDriver_id = this.onChangeDriver_id.bind(this);
        this.onChangeBdate = this.onChangeBdate.bind(this);
        this.onChangePhone_no = this.onChangePhone_no.bind(this);
        this.onChangeReg_date = this.onChangeReg_date.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            driver_name:'',
            driver_id:'',
            bdate:'',
            phone_no:'',
            reg_date:''


        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/driver/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    driver_name:response.data.driver.driver_name,
                    driver_id:response.data.driver.driver_id,
                    bdate:response.data.driver.bdate,
                    phone_no:response.data.driver.phone_no,
                    reg_date:response.data.driver.reg_date,
                    
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeDriver_name(e){
        this.setState({driver_name:e.target.value});
    }
    onChangeDriver_id(e){
        this.setState({driver_id:e.target.value});
    }
    onChangeBdate(e){
        this.setState({bdate:e.target.value});
    }
    onChangePhone_no(e){
        this.setState({phone_no:e.target.value});
    }
    onChangeReg_date(e){
        this.setState({reg_date:e.target.value});
    }
   


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            driver_name: this.state.driver_name,
            driver_id: this.state.driver_id,
            bdate: this.state.bdate,
            phone_no: this.state.phone_no,
            reg_date: this.state.reg_date,
            

        };

        axios.put("http://localhost:8070/driver/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/viewDriver');
    }





    render() {
        return(

            <div className ="form_journey">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Bus Driver Details
                </h2>
           
                <form onSubmit={this.onSubmit}  id="form_journey">


                    <div className="row" required>
                        <label htmlFor="name">Name  </label>
                        <input type="text" className="form-control" id="driver_name" placeholder="" required
                          value={this.state.driver_name}
                          onChange = {this.onChangeDriver_name}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="driver_id">Driver NIC No  </label>
                        <input type="text" className="form-control" id="driver_id" placeholder="" required
                         value={this.state.driver_id}
                         onChange = {this.onChangeDriver_id}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="bdate">Date of Birth  </label>
                        <input type="date" className="form-control" id="bdate"  placeholder="" required
                            value={this.state.bdate}
                            onChange = {this.onChangeBdate}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="pno">Phone Number </label>
                        <input type="number" className="form-control" id="phone_no" required
                            value={this.state.phone_no}
                            onChange = {this.onChangePhone_no}
                         
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="reg_date">Registered Date  </label>
                        <input type="date" className="form-control" id="reg" required
                            value={this.state.reg_date}
                            onChange = { this.onChangeReg_date}
                        />
                    </div>

                    

                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit">Edit</button>
                    <br/><br/>

                </form>

                
                 <div>
                    <img src={Image10} id="image10"/>
                </div> 

            </div>
            
        )
    }
}