import React, {Component} from 'react';
import axios from 'axios';
import Image2 from '../../Images/timetable.png';



export default class ViewTimetable extends Component {

    constructor(props){
        super(props);
        this.state = {timetable:[],
            searchId:''
        
        };

        this.addItem = this.addItem.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.updateTimetable = this.updateTimetable.bind(this);
    }

    
    
    componentDidMount(){
        axios.get("http://localhost:8070/timetable/").then(response =>{
            this.setState({timetable:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/timetable/').then(response =>{
            this.setState({timetable:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    addItem(){
        this.props.history.push('/dashboard/addTimetable');
    }

    updateTimetable(id){
        this.props.history.push(`/dashboard/updateTimetable/${id}`);
       
    }

    // seacrh bar

    searchSupName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    
    // delete timetable data

    onDelete=(id) =>{
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8070/timetable/delete/${id}`).then((res)=>{
                this.setState({item: this.state.timetable.filter(item => item.id !== id)});
                this.props.history.push('/dashboard/viewTimetable');
                
            }) ;
            

        }
        else{
            this.props.history.push(`/viewTimetable`);
        }
    }
    



    render(){
        let filterroute = this.state.timetable.filter((
            timetables)=>{
                return timetables.route.toLowerCase().indexOf(this.state.
                    searchId.toLowerCase())!==-1;
            }
        );

        return (
            <div>

                <div id="topic">
                    <h2>Dashboard - Manage Timetable</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                    <input className="form-control" type = "search"  name="searchQuery" style={{width:"7cm", marginLeft:"10cm", marginTop:"1cm", borderRadius:"9px"}} placeholder="Search by Route" value={this.state.searchId} onChange={this.searchSupName.bind(this)} />
            
                </div>

                <div>
                    <a className="btn btn-warning" id="btn3" href="/dashboard/addTimetable">
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Timetable
                    </a>
                </div>

                <div id="table1">

                    <table id="journey_table" style={{textAlign:'center'}}>
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Timetable</span>

                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}} />
                                    </div>                         

                                </span>
                            </tr>
                            
                            <tr>

                                <th style={{'textAlign':'center'}}>Route</th>
                                <th style={{'textAlign':'center'}}>Origine</th>
                                <th style={{'textAlign':'center'}}>Destination</th>
                                <th style={{'textAlign':'center'}}>Start time</th>
                                <th style={{'textAlign':'center'}}>End time</th>
                                <th style={{'textAlign':'center'}}>Action</th>
                            
                            </tr>

                        </thead>
                        {/* retrive data of timetable */}
                        <tbody>

                            {filterroute.map(
                                    timetables=>
                                
                                
                                    <tr key = {timetables._id}>
                                        
                                        <td>{timetables.route}</td>
                                        <td>{timetables.from}</td>
                                        <td>{timetables.to}</td>
                                        <td>{timetables.start_time}</td>
                                        <td>{timetables.end_time}</td>

                                    <td>
                                        {/* edit button */}
                                        <a className="btn btn-warning" id="btn1" href={`/dashboard/updateTimetable/${timetables._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a>
                                      {/* delete button */}
                                    
                                        <a className="btn btn-danger" id="btn2" onClick={() =>this.onDelete(timetables._id)}>
                                            <i class="fa fa-trash blackiconcolor" aria-hidden="true"></i>&nbsp;&nbsp;Delete&nbsp;
                                        </a>
                                    </td>


                                </tr>
                            )}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );
        
        // return(

        //     <div>
        //         <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        //         <h2 style={{marginLeft:295}}>Dashboard - Manage Timetable</h2>
        //         </div>
                
                
        //         <div className = "form-group col-md-4">
        //             <input type="text" class="form-control" style={{marginLeft:295, borderRadius: "30px"}} placeholder="Search by Route" value={this.state.searchId} onChange={this.searchSupName.bind(this)}/>
        //         </div>                

        //         <div>
        //             <button  style={{marginLeft:1260,  background: "#072344", borderRadius: "30px", width: "170px"}} className = "btn btn-secondary" onClick={this.addItem}>   + Add New  </button>
        //         </div>   
                
        //         <br/>
                
        //             {/* <table className="table table-hover"> */}
        //             <Table bordered hover size="sm" style={{width: "1150px", marginLeft: "300px", borderRadius: "12px", boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)"}}>
        //                 <thead>
        //                     <tr>
        //                     <th colspan="6" scope="col" style={{fontSize: "1.3rem"}}> <Go.GoCalendar size={26} style={{width: "45px"}}/> Timetables</th>
        //                     </tr>
        //                 </thead>
        //                 <thead>
        //                     <tr>
                            
        //                     <th scope="col">Route</th>
        //                     <th scope="col">Origine</th>
        //                     <th scope="col">Destination</th>
        //                     <th scope="col">Start time</th>
        //                     <th scope="col">End time</th>
        //                     <th scope="col">Action</th>
                                
        //                     </tr>
        //                 </thead>

        //                 <tbody>
        //                     {
        //                          filterroute.map(
        //                             timetables=>
                                
                                
        //                             <tr key = {timetables._id}>
                                        
        //                                 <td>{timetables.route}</td>
        //                                 <td>{timetables.from}</td>
        //                                 <td>{timetables.to}</td>
        //                                 <td>{timetables.start_time}</td>
        //                                 <td>{timetables.end_time}</td>
                                        
        //                                 <td>
        //                                     <button style={{background: "#1c3746", fontSize: ".84rem", borderRadius: "30px"}} className="btn btn-secondary" onClick={(e)=>{this.updateTimetable(timetables._id)}}><AiIcon.AiOutlineEdit/> Edit</button>
        //                                     <button style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "30px"}} className="btn btn-secondary" onClick={() =>this.onDelete(timetables._id)}><AiIcon.AiOutlineDelete/> Delete</button>
                                            
        //                                 </td> 
        //                             </tr>
        //                         )
        //                     }
        //                 </tbody>

        //             {/* </table> */}
        //             </Table>
                
        //     </div>
        // )
    }
    
}