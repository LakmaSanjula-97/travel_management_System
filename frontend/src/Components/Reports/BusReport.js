import React, {Component} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas'; 

export default class generatePdf extends Component {

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

    printDocument() {  
        const input = document.getElementById('pdfdiv');  
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
            pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
    }
    


      

   

    // onDelete=(id) =>{
    //     var confirmtext;
    //     if(window.confirm("Are You Sure Want to Delete !")){
    //         axios.delete(`http://localhost:8070/bus/delete/${id}`).then(res=>{
    //             this.setState({buses: this.state.buses.filter(bus => bus._id !== id)});
    //             confirmtext = "You Successfully delete attendance";
                
    //         });
    //     }
    //     else{
    //         confirmtext = "You pressed cancel Try again";
    //     }

        
    // }
    searchBusModel(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
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
                
                    <input className="form-control" type="search" placeholder="Search.." name="searchQuery" style= {{width:"7cm", marginLeft:"29cm", marginTop:"1.3cm"}} onChange={this.searchBusModel.bind(this)} />
                    <a className="btn btn-success" onClick={() =>this.printDocument()} style={{marginTop: "-1.5cm",marginLeft:"25.4cm",color:"white", background:"#072344" }} onClick={this.printDocument}>
                    <i className="fa fa-file-o"></i>&nbsp;Generate PDF
                    </a>
                </div>
                <div id="pdfdiv">
                    <h2 style={{marginLeft:"20cm",marginTop:"-0.5cm"}}>All Buses</h2>
                    <table className="table table-striped"  style={{marginTop:"1cm", fontSize:"14px", backgroundColor: "white",width:"30cm", marginLeft:"7cm"}}>
                        
                        <thead>
                            
                            <tr>

                                <th>#</th>
                                <th>Bus Number</th>
                                <th>Bus Name</th>
                                <th>Model</th>
                                <th>Capasity</th>
                                <th>Status</th>
                                
                                
                            
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
                                    

                                    {/* <td>
                                        <a className="btn btn-warning" href={`/busupdate/${p._id}`}>
                                            &nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(p._id)}>
                                            &nbsp;Delete
                                        </a>
                                        <a className="btn btn-danger" href={`/viewbusdetail/${p._id}`}>
                                            &nbsp;View
                                        </a>
                                    </td> */}


                                </tr>
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}