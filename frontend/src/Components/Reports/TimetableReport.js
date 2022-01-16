import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/managebusroute.css';
import Image2 from '../../Images/timetable.png';

import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';

export default class TimetableReport extends Component{

    constructor(props){
        super(props);
        this.state = {timetable:[]
        
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8070/timetable/").then(response =>{
            this.setState({timetable:response.data})
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
        

        return (
            <div>

                <div id="topic">
                    <h2>Report - Manage Timetable</h2>
                    <hr id="hr"></hr>
                </div>

                
                <div>

                <button onClick={this.printDocument}  className="btn4" >
                        Generate PDF
                    </button> 
            
                </div>

                

                <div id="table1">

                    <table id="viewtable" style={{textAlign:'center'}} className="report_busroute_table">
                        <thead>

                            <tr style={{'textAlign':'left'}}>
                                <span >

                                    <span id="text1">Timetable</span>

                                    <div>
                                        <img src={Image2} id="iconimage" style={{marginTop:'-1cm'}} />
                                    </div>                         

                                </span>
                            </tr>

                            <tr id="reporthead1">

                                <th style={{'textAlign':'center'}}>Route</th>
                                <th style={{'textAlign':'center'}}>Origine</th>
                                <th style={{'textAlign':'center'}}>Destination</th>
                                <th style={{'textAlign':'center'}}>Start time</th>
                                <th style={{'textAlign':'center'}}>End time</th>
                                
                            
                            </tr>

                        </thead>
                        {/* get all the time table details */}
                        <tbody>

                            {this.state.timetable.map(
                                    timetables=>
                                
                                
                                    <tr key = {timetables._id}>
                                        
                                        <td>{timetables.route}</td>
                                        <td>{timetables.from}</td>
                                        <td>{timetables.to}</td>
                                        <td>{timetables.start_time}</td>
                                        <td>{timetables.end_time}</td>

                                    


                                </tr>
                            )}
                            
                        </tbody> 

                        

                    </table>
                </div>
            </div>
        );

    }

}