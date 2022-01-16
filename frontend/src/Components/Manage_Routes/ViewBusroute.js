import React, {Component} from 'react';
import axios from 'axios';
import Image2 from '../../Images/route.png'
import '../../Styles/managebusroute.css'

export default class allBusroutes extends Component {

    constructor(props){
        super(props);
        this.state = {busroutes: [], searchId:''};

        
    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/busroute/').then(response=>{
            this.setState({busroutes: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/busroute/').then(response =>{
            this.setState({busroutes:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    deleteRoute=(id)=>{
        axios.delete(`http://localhost:8070/busroute/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Are you sure to delete ? ");
                
            })
        
    }


    searchRouteName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }


    addBusrote(){
        this.props.history.push('/dashboard/addBusroute');
    }


    

    render(){

        let filterroute_name = this.state.busroutes.filter((
            p)=>{
                return p.route_name.indexOf(this.state.
                    searchId)!==-1;
            }
        );
      
        return (
            <div>

                <div id="topic">
                    <h2>Dashboard - Manage Bus Routes</h2>
                    <hr id="hr"></hr>
                </div>
                <div>
                    
                    <input className="form-control" type = "search" placeholder="search by route" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchRouteName.bind(this)} />
                    
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/addBusroute">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Route
                    </a>
                </div>
                

                <div id="table1">

                  
                    <table  id="busroute_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Routes</span>
                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}}/>
                                    </div>                         

                                </span>
                            </tr>
                            
                            <tr>

                                <th style={{'textAlign':'center'}}>Route</th>
                                <th style={{'textAlign':'center'}}>Bus Number</th>
                                <th style={{'textAlign':'center'}}>Route From</th>
                                <th style={{'textAlign':'center'}}>Route To</th>
                                <th style={{'textAlign':'center'}}>Cost</th>
                                <th style={{'textAlign':'center', width:'7cm'}}>Action</th>
                            
                            </tr>
                        </thead>
                        
                        <tbody>
                            {filterroute_name.map((p, index)=>{
                                return <tr key={index}>
                                        
                                    <td>{p.route_name}</td>
                                    <td>{p.bus_no}</td>
                                    <td>{p.route_from}</td>
                                    <td>{p.route_to}</td>
                                    <td>{p.cost}</td>

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/busrouteupdate/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                
                                        
                                        <a className="btn btn-danger" id="btn2"  onClick={() => this.deleteRoute(p._id)}>
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