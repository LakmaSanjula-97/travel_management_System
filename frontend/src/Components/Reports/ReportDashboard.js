import React, {Component} from 'react';
import axios from 'axios';
import '../../Styles/ReportDashboard.css';
import RepImage1 from '../../Images/Busreport_image.jpg'
import RepImage2 from '../../Images/journeyReport_image.jpeg'
import RepImage3 from '../../Images/routeReport_images.jpg'
import RepImage4 from '../../Images/timetablepo_image.jpg'



export default class ReportDashboard extends Component {


   
    
    render(){
        
        return (
            <div>

                <div id="topic">        
                    <h2>Dashboard - Report </h2>
                    <hr id="hr"></hr>
                </div>
                
                <div>
                    <img src={RepImage1} id="rep_image1"/>
                    
                    {/* Generate Bus route report */}
                    <a className="btn btn-warning" id="rep_link1" href="#">
                            <span >
                                Buse Report <br></br> <br></br> Download
                            </span>
                    </a>
                </div>

                <div>
                    <img src={RepImage2} id="rep_image2"/>
                    
                    {/* --------generate journey report--- */}
                    <a className="btn btn-warning" id="rep_link2" href="/dashboard/journeyreport">
                            <span >
                               Passenger <br></br> Journey Report<br></br> Download
                            </span>
                    </a>
                </div>

                <div>
                    <img src={RepImage3} id="rep_image3"/>
                    
                    {/* ---generate routes report--- */}
                     <a className="btn btn-warning" id="rep_link3" href="/dashboard/busroutereport">
                            <span >
                                Bus Routes <br></br> Report <br></br> Download
                            </span>
                    </a> 
                </div>

                <div>
                    <img src={RepImage4} id="rep_image4"/>
                    
                    {/* timetable report */}
                    <a className="btn btn-warning" id="rep_link4" href="/dashboard/timetablereport">
                            <span >
                                Bus Timetable <br></br> Report<br></br> Download
                            </span>
                    </a>
                </div>
                
                <div>

                </div>



            </div>
            
        );
    }
}