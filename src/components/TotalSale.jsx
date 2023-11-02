import React from "react";
import "../css/total-sale.css"
import { green } from "@mui/material/colors";
function ToatalSale () {
    return (
        <div className="total-sale">
                <p style={{paddingTop:"15px",color:"#9198a2",fontWeight:"520"}}>Total sale</p>
                <h1 style={{color:"#31358c",fontWeight:"520"}}>$57.870.48</h1>
                <br />
                <div className="mb-2" style={{color:"green",display:"flex",alignItems:"center"}}>
                <span class="material-symbols-outlined">
                    arrow_drop_up
                </span> 35.77%
                </div>       
<a href="!#" style={{fontWeight:"520"}}>View report</a>
        </div>
    )
};
export default ToatalSale;