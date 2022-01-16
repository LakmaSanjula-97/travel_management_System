import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/managebusroute.css';
import Image2 from '../../Images/route.png';

import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';


export default class BusroutesReport extends Component {

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

    // jspdf generete code
    printDocument() {  
        const input = document.getElementById('viewtable');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 200;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 4, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      }

   
    
    render(){
        console.log(this.state.busroutes);
        return (
            <div>
                
                <div id="topic">
                    <h2>Report -  Bus Routes</h2>
                    <hr id="hr"></hr>
                </div>

                <div>
                    
                    {/* generate pdf button */}

                     <button onClick={this.printDocument}  className="btn4" >
                        Generate PDF
                    </button> 

           
                </div>
                
                <div id="table1">
                
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

                            {/* get table data */}

                            <tr id="reporthead1">

                                <th style={{'textAlign':'center', width:'3cm'}}>No </th>
                                <th style={{'textAlign':'center'}}>Route</th>
                                <th style={{'textAlign':'center'}}>Bus Number</th>
                                <th style={{'textAlign':'center'}}>Route From</th>
                                <th style={{'textAlign':'center'}}>Route To</th>
                                <th style={{'textAlign':'center'}}>Cost</th>
                            
                            </tr>

                        </thead>

                        <tbody>
                            {this.state.busroutes.map((p, index)=>{
                                return <tr key={index}>
                                    <td>
                                        
                                            {index+1}
                                        
                                    </td>       
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