import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/managejourney.css';
import Image2 from '../../Images/journey_icon.png';

import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';


export default class JourneyReport extends Component {

    constructor(props){
        super(props);
        this.state = {journeys: []};
    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/journey/').then(response=>{
            this.setState({journeys: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // pdf generation code
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
        console.log(this.state.journeys);
        return (
            <div>
                
                <div id="topic">
                    <h2>Report -  Journey</h2>
                    <hr id="hr"></hr>
                </div>

                <div>
                    
                    {/* generate pdf button */}
                     <button onClick={this.printDocument}  className="btn4" >
                        Generate PDF
                    </button> 

           
                </div>
                
                <div id="table1">
                
                    <table  id="viewtable" style={{textAlign:'center'}} className="report_journey_table">
                        <thead>

                            <tr style={{'textAlign':'left'}}>

                                <span >

                                    <span id="text1">Journey</span>
                                    
                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}}/>
                                    </div>                         

                                </span>
                            </tr>

                            {/* Retrive all the table data */}

                            <tr id="reporthead1">

                                <th style={{'textAlign':'center', width:'3cm'}}>No </th>
                                <th style={{'textAlign':'center'}}>Route</th>
                                <th style={{'textAlign':'center'}}>passenger Id</th>
                                <th style={{'textAlign':'center'}}>From</th>
                                <th style={{'textAlign':'center'}}>To</th>
                                <th style={{'textAlign':'center'}}>Start Time</th>
                                <th style={{'textAlign':'center'}}>End Time</th>
                            
                            </tr>

                        </thead>

                        <tbody>
                            {this.state.journeys.map((p, index)=>{
                                return <tr key={index}>
                                    <td>
                                        
                                            {index+1}
                                        
                                    </td>       
                                    <td>{p.journey_route}</td>
                                    <td>{p.passenger_id}</td>
                                    <td>{p.journey_from}</td>
                                    <td>{p.journey_to}</td>
                                    <td>{p.start_time}</td>
                                    <td>{p.end_time}</td>

                                </tr>
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}