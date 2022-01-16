import axios from "axios";
import React from "react";
import '../../Styles/Header.css';

function navbar(){
    async function logout(e){
        try{
            e.preventDefault();

            const status = (await axios.get("http://localhost:8070/user/logout")).status
           window.location="/"
        }catch(err){

        }
    }
    return(

       
        <div id="view1">
  
            <button  id="view2" onClick={(e)=>{logout(e)}}><a ><i className="fa fa-sign-out" aria-hidden="true" ></i>&nbsp;&nbsp; Logout</a></button>
        </div>
        
    )
}
export default navbar;