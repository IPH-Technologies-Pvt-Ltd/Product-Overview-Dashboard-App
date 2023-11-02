import React from "react";
function ShareableData () {
    return (
        <div className="d-flex flex-column px-3">
            <div style={{color:"#9198a2", fontWeight:"520"}}>Marketing effectiveness</div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <p style={{color: "#2a3292",fontWeight:"520"}}>$2,787.90</p>
                <div style={{display:"flex",alignItems:"center",color:"green",fontSize:"14px"}}>
                <span class="material-symbols-outlined">       
                  arrow_drop_up
                </span> 28%
                </div>
                <a href="!#" style={{fontSize:"14px",fontWeight:"520"}}>View report</a>
            </div>
        </div>
    );
};
export default ShareableData;