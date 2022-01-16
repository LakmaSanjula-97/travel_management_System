import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/managebusroute.css';
import Image8 from '../../Images/bus.JPG';
import Image3 from '../../Images/bustime.png';

export default class EditTimetable extends Component {

    constructor(props) {
        super(props);

        

        this.onChangeroute = this.onChangeroute.bind(this);
        this.onChangefrom = this.onChangefrom.bind(this);
        this.onChangeto = this.onChangeto.bind(this);
        this.onChangestart_time = this.onChangestart_time.bind(this);
        this.onChangeend_time = this.onChangeend_time.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            route:'',
            from:'',
            to:'',
            start_time:'',
            end_time:''

        };

    }

    componentDidMount(){

        // get all timetable details
        axios.get('http://localhost:8070/timetable/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    route:response.data.timetable.route,
                    from:response.data.timetable.from,
                    to:response.data.timetable.to,
                    start_time:response.data.timetable.start_time,
                    end_time:response.data.timetable.end_time,

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeroute(e){
        this.setState({route:e.target.value});
    }
    onChangefrom(e){
        this.setState({from:e.target.value});
    }
    onChangeto(e){
        this.setState({to:e.target.value});
    }
    onChangestart_time(e){
        this.setState({start_time:e.target.value});
    }
    onChangeend_time(e){
        this.setState({end_time:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            route: this.state.route,
            from: this.state.from,
            to: this.state.to,
            start_time: this.state.start_time,
            end_time: this.state.end_time,

        };

        // update timetable data 

        axios.put("http://localhost:8070/timetable/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        // navigate to the all timetable data page
        this.props.history.push('/dashboard/viewTimetable');
    }





    render() {
        return(
            <div className="form_route">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Update Timetable
            </h2>

            {/* update timetable data form */}
            <form onSubmit={this.onSubmit} id="form_route">

                    <div className="row">
                    <label htmlFor="route" class="ftext">Route : </label>
                    <input type="text" className="form-control" id="route" placeholder="" required
                     value={this.state.route}
                     onChange = {this.onChangeroute}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="busnumber" class="ftext">From : </label>
                    <input type="text" className="form-control" id="from" placeholder="" required
                     value={this.state.from}
                     onChange = {this.onChangefrom}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from" class="ftext">To : </label>
                    <input type="text" className="form-control" id="to"  placeholder="" required
                    value={this.state.to}
                    onChange = {this.onChangeto}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">Start Time : </label>
                    <input type="text" className="form-control" id="start_time" placeholder="" required
                     value={this.state.start_time}
                     onChange = {this.onChangestart_time}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">End Time : </label>
                    <input type="text" className="form-control" id="end_time" placeholder="" required
                     value={this.state.end_time}
                     onChange = {this.onChangeend_time}
                    />
                </div>


    
                <button type="submit" className="btn btn-primary" style={{marginLeft: "8cm", width: "3cm"}}>Edit</button>
                <br/><br/>
            </form>

            <div>
                <img src={Image8} id="image8"/>
            </div>
            <div>
                <img src={Image3} id="image3"/>
            </div>

            </div>
            
        )
    }
}