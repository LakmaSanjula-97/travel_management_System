import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/managejourney.css';

import Image1 from '../../Images/journey_img1.png'
export default class EditJourney extends Component {

    constructor(props) {
        super(props);

        

        this.onChangeJourney_route = this.onChangeJourney_route.bind(this);
        this.onChangePassenger_id = this.onChangePassenger_id.bind(this);
        this.onChangeJourney_from = this.onChangeJourney_from.bind(this);
        this.onChangeJourney_to = this.onChangeJourney_to.bind(this);
        this.onChangeStart_time = this.onChangeStart_time.bind(this);
        this.onChangeEnd_time = this.onChangeEnd_time.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            journey_route:'',
            passenger_id:'',
            journey_from:'',
            journey_to:'',
            start_time:'',
            end_time:''

        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/journey/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    journey_route:response.data.journey.journey_route,
                    passenger_id:response.data.journey.passenger_id,
                    journey_from:response.data.journey.journey_from,
                    journey_to:response.data.journey.journey_to,
                    start_time:response.data.journey.start_time,
                    end_time:response.data.journey.end_time,

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeJourney_route(e){
        this.setState({journey_route:e.target.value});
    }
    onChangePassenger_id(e){
        this.setState({passenger_id:e.target.value});
    }
    onChangeJourney_from(e){
        this.setState({journey_from:e.target.value});
    }
    onChangeJourney_to(e){
        this.setState({journey_to:e.target.value});
    }
    onChangeStart_time(e){
        this.setState({start_time:e.target.value});
    }
    onChangeEnd_time(e){
        this.setState({end_time:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            journey_route: this.state.journey_route,
            passenger_id: this.state.passenger_id,
            journey_from: this.state.journey_from,
            journey_to: this.state.journey_to,
            start_time: this.state.start_time,
            end_time: this.state.end_time,

        };

        axios.put("http://localhost:8070/journey/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/dashboard/viewJourney');
    }





    render() {
        return(

            <div className ="form_journey">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Edit Journey
                </h2>
           
                <form onSubmit={this.onSubmit}  id="form_journey">


                    <div className="row" required>
                        <label htmlFor="route">Route Name</label>
                        <input type="text" className="form-control" id="journey_route" placeholder=""
                          value={this.state.journey_route}
                          onChange = {this.onChangeJourney_route}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="passenger_id">Passenger Id :</label>
                        <input type="text" className="form-control" id="passenger_id" placeholder=""
                         value={this.state.passenger_id}
                         onChange = {this.onChangePassenger_id}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="from">From  </label>
                        <input type="text" className="form-control" id="journey_from"  placeholder="" 
                            value={this.state.journey_from}
                            onChange = {this.onChangeJourney_from}
                        />
                    </div>


                    <div className="row" required>
                        <label htmlFor="to">To  </label>
                        <input type="text" className="form-control" id="journey_to" 
                            value={this.state.journey_to}
                            onChange = {this.onChangeJourney_to}
                         
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="start_time">Start Time</label>
                        <input type="text" className="form-control" id="start_time" 
                            value={this.state.start_time}
                            onChange = { this.onChangeStart_time}
                        />
                    </div>

                    <div className="row" required>
                        <label htmlFor="end_time">End Time</label>
                        <input type="text" className="form-control" id="end_time" 
                            value={this.state.end_time}
                            onChange = { this.onChangeEnd_time}
                        />
                    </div>

                    <button type="reset"  id = "#">Reset</button>

                    <button type="submit">Edit</button>
                    <br/><br/>

                </form>

                
                <div>
                    <img src={Image1} id="image1"/>
                </div>

            </div>
            
        )
    }
}