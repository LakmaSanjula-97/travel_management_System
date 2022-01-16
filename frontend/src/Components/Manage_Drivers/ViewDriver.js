import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/managejourney.css'
import Image2 from '../../Images/drivet_icon.png'


export default class allDrivers extends Component {

    constructor(props){
        super(props);
        this.state = {drivers: [], searchId:''};
 
    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/driver/').then(response=>{
            this.setState({drivers: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/driver/').then(response =>{
            this.setState({drivers:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    deleteDriver=(id)=>{
        axios.delete(`http://localhost:8070/driver/delete/${id}`).then((res) =>{
            
                //alert("Delete Successfully");

                window.confirm("Do you need to delete! ?");
                
            })
        
    }


    addDriver(){
        this.props.history.push('/dashboard/addDriver');
    }

    searchDriverId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }


    

    render(){
        
        let filterdriver_id = this.state.drivers.filter((
            p)=>{
                return p.driver_id.indexOf(this.state.
                    searchId)!==-1;
            }
        );


        return (
            <div>

                <div id="topic">
                    <h2>Dashboard - Manage Bus Driver Details</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search" placeholder="search by NIC Number" name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} value={this.state.searchId} onChange={this.searchDriverId.bind(this)} />
            
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/addDriver">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Driver
                    </a>
                </div>

                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Bus Driver Details</span>

                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}} />
                                    </div>                         

                                </span>
                            </tr>

                            <tr>

                                <th style={{'textAlign':'center'}}>Driver Name</th>
                                <th style={{'textAlign':'center'}}>NIC No</th>
                                <th style={{'textAlign':'center'}}>Date of Birth</th>
                                <th style={{'textAlign':'center'}}>Phone Number </th>
                                <th style={{'textAlign':'center'}}>Registered Date</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                                
                            
                            </tr>

                        </thead>
                        
                        <tbody>

                            {filterdriver_id.map((p, index)=>{
                                return <tr key={index}>
                                     
                                    <td>{p.driver_name}</td>
                                    <td>{p.driver_id}</td>
                                    <td>{p.bdate}</td>
                                    <td>{p.phone_no}</td>
                                    <td>{p.reg_date}</td>
                                    

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/updateDriver/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                      
                                    
                                        <a className="btn btn-danger" id="btn2" onClick={() => this.deleteDriver(p._id)}>
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