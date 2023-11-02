import React from "react";
function ShareableCustomerData () {
    return (
        <div className="d-flex flex-column px-3">
            <div className="d-flex flex-row justify-content-between pt-3">
                 <span style={{fontSize:"14px", color:"#9198a2",fontWeight:"520"}}>Repeat Customer</span>
                 <div style={{display:"flex",alignItems:"center",color:"red",fontSize:"14px"}}>
                 <span class="material-symbols-outlined">
                  arrow_drop_down
                 </span> 23%
                 </div>
            </div>
            <p className="pb-0 mb-0" style={{color:"#2a3292",fontWeight:"520"}}>$47.54</p>
        </div>
    );
};
export default ShareableCustomerData;