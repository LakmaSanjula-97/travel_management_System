import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/managejourney.css'
import Image2 from '../../Images/journey_icon.png'


export default class allJourneys extends Component {

    constructor(props){
        super(props);
        this.state = {journeys: [], searchId:''};
 
    }

    //auto refreh the code
    componentDidMount(){
        axios.get('http://localhost:8070/journey/').then(response=>{
            this.setState({journeys: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // update code
    componentDidUpdate(){
        axios.get('http://localhost:8070/journey/').then(response =>{
            this.setState({journeys:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // delete 
    deleteRoute=(id)=>{
        axios.delete(`http://localhost:8070/journey/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Do you need to delete! ?");
                
            })
        
    }


    addJourney(){
        this.props.history.push('/dashboard/addJourney');
    }

    searchPassengerId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }


    

    render(){
        
        let filterpassenger_id = this.state.journeys.filter((
            p)=>{
                return p.passenger_id.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div>

                <div id="topic">
                    <h2>Dashboard - Manage Journey</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="search by passenger id" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchPassengerId.bind(this)} />
            
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/addJourney">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Journey
                    </a>
                </div>

                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Journey</span>

                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}} />
                                    </div>                         

                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Route</th>
                                <th style={{'textAlign':'center'}}>passenger Id</th>
                                <th style={{'textAlign':'center'}}>From</th>
                                <th style={{'textAlign':'center'}}>To</th>
                                <th style={{'textAlign':'center'}}>Start Time</th>
                                <th style={{'textAlign':'center'}}>End Time</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                            
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filterpassenger_id.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.journey_route}</td>
                                    <td>{p.passenger_id}</td>
                                    <td>{p.journey_from}</td>
                                    <td>{p.journey_to}</td>
                                    <td>{p.start_time}</td>
                                    <td>{p.end_time}</td>

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/updateJourney/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                      
                                    
                                        <a className="btn btn-danger" id="btn2" onClick={() => this.deleteRoute(p._id)}>
                                            <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
                                        </a>
                                    </td>


                                </tr>
                            })}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
    }
}