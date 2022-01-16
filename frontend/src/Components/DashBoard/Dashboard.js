import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/managebusroute.css';
import Image2 from '../../Images/route.png';
import '../../Styles/Dashboard.css'


export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {busroutes: []};
    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/busroute/').then(response=>{
            this.setState({busroutes: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }


    

   
    
    render(){
        console.log(this.state.busroutes);
        return (
            <div>

                <div id="topic">
                    <h2>Welcome to Dashboard</h2>
                    <hr id="hr"></hr>
                </div>
                


               {/* ---------bus----------- */}
               <div>
                   <button id="dash_btn1">

                        <i class="fas fa-bus fa-5x imgcolor1"></i>
                
                        <a className="btn btn-warning" id="dash_link1" href="#">
                            Buses
                        </a>
                       
                    </button>
               </div>

               <div>
                   <button id="dash_btn2">

                        <i class="fas fa-route fa-5x imgcolor2"></i>
                
                        <a className="btn btn-warning" id="dash_link2" href="/dashboard/viewBusroute">
                            Routes
                        </a>
                       
                    </button>
               </div>

               <div>
                   <button id="dash_btn3">

                        <i class="fas fa-address-card fa-5x imgcolor3"></i>
                
                        <a className="btn btn-warning" id="dash_link3" href="#">
                            Tokens
                        </a>
                       
                    </button>
               </div>

                
                <div id="table1" style={{marginTop:'2cm'}}>
                
                    <table  id="viewtable" style={{textAlign:'center'}} className="report_busroute_table">
                        <thead>

                            <tr style={{'textAlign':'left'}}>

                                <span >

                                    <span id="text1">Routes</span>
                                    
                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}}/>
                                    </div>                         

                                </span>
                            </tr>

                            <tr id="reporthead1">

                               
                                <th style={{'textAlign':'center', width:'3cm','backgroundColor':'whitesmoke',color:'black'}}>Route</th>
                                <th style={{'textAlign':'center','backgroundColor':'whitesmoke',color:'black'}}>Bus Number</th>
                                <th style={{'textAlign':'center','backgroundColor':'whitesmoke',color:'black'}}>Route From</th>
                                <th style={{'textAlign':'center','backgroundColor':'whitesmoke',color:'black'}}>Route To</th>
                                <th style={{'textAlign':'center','backgroundColor':'whitesmoke',color:'black'}}>Cost</th>
                            
                            </tr>

                        </thead>

                        <tbody>
                            {this.state.busroutes.map((p, index)=>{
                                return <tr key={index}>
                                          
                                    <td>{p.route_name}</td>
                                    <td>{p.bus_no}</td>
                                    <td>{p.route_from}</td>
                                    <td>{p.route_to}</td>
                                    <td>{p.cost}</td>

                                </tr>
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}