import React from "react";

function Points () {
    return (

        <div className="row">
            <div className="col-md-4 border-end ps-4 pb-3">
                <div className="d-flex">
                 <h3 style={{color:"#a9acb5",fontWeight:"520"}}>$25,547.87</h3>
                 <div style={{display:"flex",alignItems:"center",color:"green",fontSize:"14px",paddingLeft:"5px"}}>
                 <span class="material-symbols-outlined">
                    arrow_drop_up
                 </span> 35.77%
                 </div>
            </div>
              <span style={{fontSize:"14px",color:"#a9acb5",fontWeight:"520"}}>Points os Scale </span>
            </div>
            <div className="col-md-4 border-end pb-3">
            <div className="d-flex">
            <h3 style={{color:"#a9acb5",fontWeight:"520"}}>$25,547.87</h3>
            <div style={{display:"flex",alignItems:"center",color:"green",fontSize:"14px",paddingLeft:"5px"}}>
                 <span class="material-symbols-outlined">
                    arrow_drop_up
                 </span> 35.77%
                 </div>
        </div>
        <span style={{fontSize:"14px",color:"#a9acb5", fontWeight:"520"}}>Online Store</span>
            </div>
            <div className="col-md-4 pb-3">
            <div className="d-flex">
            <h3 style={{color:"#a9acb5",fontWeight:"520"}}>$25,547.87</h3>
            <div style={{display:"flex",alignItems:"center", color:"red",fontSize:"14px",paddingLeft:"5px"}}>
            <span class="material-symbols-outlined">
               arrow_drop_down
             </span> 35.77%
            </div>
        </div>
        <span style={{fontSize:"14px", color:"grey"}}> Feedback </span>
            </div>
        </div>
       
    );
};
export default Points;