import React, {Component} from 'react';
import axios from 'axios';
import Image2 from '../../Images/busicon.jpg'
import '../../Styles/managebusroute.css'; 



export default class AllBuses extends Component {

    constructor(props){
        super(props);
        this.state = {buses: [], searchId:''};

        
        
    }

    componentDidMount(){
        axios.get('http://localhost:8070/bus/').then(response=>{
            this.setState({buses: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }
    componentDidUpdate(){
        axios.get('http://localhost:8070/bus/').then(response =>{
            this.setState({bus:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }


   

    onDelete=(id) =>{
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8070/bus/delete/${id}`).then(res=>{
                this.setState({buses: this.state.buses.filter(bus => bus._id !== id)});
                confirmtext = "You Successfully delete attendance";
                
            });
        }
        else{
            confirmtext = "You pressed cancel Try again";
        }

        
    }
    searchBusModel(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }
    addBus(){
        this.props.history.push('/addBus');
    }


    


    

    render(){
        

        let filtermodel = this.state.buses.filter((
            bus)=>{
                return bus.model.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        console.log(this.state.buses);

        return (
            <div>
                <div>
                {/* <a className="btn btn-success" href="/pdfGenerate" style={{marginTop: "5px", marginLeft: "5px"}}>
                    <i className="fa fa-file-o"></i>&nbsp;Generate PDF
                </a> */}
                    <input className="form-control" type="search" placeholder="Search.." name="searchQuery" style= {{width:"7cm", marginLeft:"8cm", marginTop:"2cm"}} onChange={this.searchBusModel.bind(this)} />
                    
                </div >
                <div id="table1">
                    <table id="busroute_table"  style={{textAlign:'center', marginTop:"-2cm"}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >
                            <span id="text1">Buses</span>
                            <div>
                                <img src={Image2} id="iconimage"/>
                            </div> 
                            

                    </span>
                            </tr>
                            
                            
                            
                            
                            
                            
                            <tr>

                                <th style={{'textAlign':'center'}}>#</th>
                                <th style={{'textAlign':'center'}}>Bus Number</th>
                                <th style={{'textAlign':'center'}}>Bus Name</th>
                                <th style={{'textAlign':'center'}}>Model</th>
                                <th style={{'textAlign':'center'}}>Capasity</th>
                                <th style={{'textAlign':'center'}}>Status</th>
                                <th style={{'textAlign':'center', width:'7cm'}}>Action</th>
                                
                            
                            </tr>
                        </thead>
                        <tbody>
                            {filtermodel.map((p, index)=>{
                                return <tr key={index}>
                                    <td>
                                        <a href={`/bus/${p._id}`} style={{textDecoration:"none"}}>
                                            {index+1}
                                        </a> 
                                    </td>       
                                    <td>{p.busNo}</td>
                                    <td>{p.busName}</td>
                                    <td>{p.model}</td>
                                    <td>{p.capasity}</td>
                                    <td>{p.status}</td>
                                    

                                    <td>
                                        <a className="btn btn-warning" id="btn1" href={`/busupdate/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                        
                                        <a className="btn btn-danger" id="btn2" href="#" onClick={() =>this.onDelete(p._id)}>
                                            <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
                                        </a>
                                        {/* <a className="btn btn-warning" id="btn1"href={`/viewbusdetail/${p._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;View
                                        </a> */}
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