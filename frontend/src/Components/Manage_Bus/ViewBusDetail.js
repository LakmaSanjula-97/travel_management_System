import React, { Component } from 'react';
import axios from 'axios';

export default class EditBus extends Component {

    constructor(props) {
        super(props);

        this.state = {

            busNo:'',
            busName:'',
            model:'',
            capasity:'',
            status:''
            

        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/bus/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    busNo:response.data.bus.busNo,
                    busName:response.data.bus.busName,
                    model:response.data.bus.model,
                    capasity:response.data.bus.capasity,
                    status:response.data.bus.status
                    

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    
    render() {
        return(
            <div className="box2">
            <div className="container" style={{marginTop:"3cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius:"10px",float:"center"}}>
             <br/>
            <form>

            <h2 style={{'textAlign':'center'}}>
                        Bus Details
                    </h2>

                    <div className="form-group" required>
                        <label htmlFor="name"><b>Bus Number</b></label>
                        <div>{this.state.busNo}</div>
                          
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="itemname"><b>Bus Name</b></label>
                        <div>{this.state.busName}</div>
                         
                    </div>

                    <div className="form-group">
                        <label htmlFor="category"><b>Model</b> </label>
                        <div>{this.state.model} </div>
                        
                        
                    
                    </div>


                    <div className="form-group" required>
                        <label htmlFor="unitprice"><b>Capasity</b> </label>
                        <div>{this.state.capasity}</div>
                            
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="qty"><b>Status</b></label>
                        <div>{this.state.status}</div>
                           
                    </div>

                    

    
                
               
            </form>
            </div>
            </div>
        )
    }
}

