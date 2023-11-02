import React from "react";
function SharableLineData () {
    return (
        <div className="d-flex flex-column px-3">
            <div className="d-flex flex-row justify-content-between pt-3">
                 <span style={{fontSize:"14px", color:"#9198a2"}}>Average order value</span>
                 <div style={{display:"flex",alignItems:"center",color:"green",fontSize:"14px"}}>
                 <span class="material-symbols-outlined">
                   arrow_drop_up
                 </span> 28%
                 </div>
            </div>
            <p className="pb-0 mb-0" style={{color:"#2a3292",fontWeight:"500"}}>$2,787.90</p>
        </div>
    );
};
export default SharableLineData;