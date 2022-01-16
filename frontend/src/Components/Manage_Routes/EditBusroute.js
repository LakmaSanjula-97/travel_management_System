import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/managebusroute.css';
import Image1 from '../../Images/bus_route_image.png'
export default class EditBusroute extends Component {

    constructor(props) {
        super(props);

        

        this.onChangeRoute_name = this.onChangeRoute_name.bind(this);
        this.onChangeBus_no = this.onChangeBus_no.bind(this);
        this.onChangeRoute_from = this.onChangeRoute_from.bind(this);
        this.onChangeRoute_to = this.onChangeRoute_to.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            route_name:'',
            bus_no:'',
            route_from:'',
            route_to:'',
            cost:''

        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/busroute/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    route_name:response.data.busroute.route_name,
                    bus_no:response.data.busroute.bus_no,
                    route_from:response.data.busroute.route_from,
                    route_to:response.data.busroute.route_to,
                    cost:response.data.busroute.cost,

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeRoute_name(e){
        this.setState({route_name:e.target.value});
    }
    onChangeBus_no(e){
        this.setState({bus_no:e.target.value});
    }
    onChangeRoute_from(e){
        this.setState({route_from:e.target.value});
    }
    onChangeRoute_to(e){
        this.setState({route_to:e.target.value});
    }
    onChangeCost(e){
        this.setState({cost:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            route_name: this.state.route_name,
            bus_no: this.state.bus_no,
            route_from: this.state.route_from,
            route_to: this.state.route_to,
            cost: this.state.cost,

        };

        axios.put("http://localhost:8070/busroute/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/viewBusroute');
    }





    render() {
        return(
            
            <div className="form_route">
                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Bus Routes
                </h2>
             
                <form onSubmit={this.onSubmit} id="form_route">
                
                    <div className="row" required>
                        <label htmlFor="name">Route Name </label>
                        <input type="text" className="form-control" id="route_name" required
                          value={this.state.route_name}
                          onChange = {this.onChangeRoute_name}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="busnumber">Bus Number </label>
                        <input type="text" className="form-control" id="bus_no" required
                         value={this.state.bus_no}
                         onChange = {this.onChangeBus_no}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="from">Route From  </label>
                        <input type="text" className="form-control" id="route_from"  required 
                            value={this.state.route_from}
                            onChange = {this.onChangeRoute_from}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="to">Route To  </label>
                        <input type="text" className="form-control" id="route_to" required
                            value={this.state.route_to}
                            onChange = {this.onChangeRoute_to}
                         
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="cost">Cost</label>
                        <input type="text" className="form-control" id="cost" required
                            value={this.state.cost}
                            onChange = { this.onChangeCost}
                        />
                    </div>

                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit" >Edit</button>
                    <br/><br/>
                </form>

                <div>
                    <img src={Image1} id="image1"/>
                </div>

            </div>
            
        )
    }
}