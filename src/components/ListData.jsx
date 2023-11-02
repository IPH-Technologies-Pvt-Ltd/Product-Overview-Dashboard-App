import React from "react";
import "../css/list-data.css"
function ListData () {
    return (
        <div className="px-3 pt-3 pb-2">
           <div style={{display:"flex",justifyContent:"space-between"}} className="mb-3">
             <span style={{color:"#9198a2", fontWeight:"520"}}>Top selling Product</span>
             <a href="!#">View report</a>
           </div>
           <div className="row"> 
            <div className="col-md-4">
             <div style={{textAlign:"center"}} className="d-flex pb-3">
                <div class="material-symbols-outlined" style={{color:"#63c7e2"}}>
                  fiber_manual_record
                </div>
                <div style={{fontSize:"14px", color:"#9198a2"}}>Loungi</div>
              </div>
              <div style={{textAlign:"center"}} className="d-flex pb-3">
                <div class="material-symbols-outlined p-0 m-0" style={{color:"#603d8b"}}>
                  fiber_manual_record
                </div>
                <div style={{fontSize:"14px",color:"#9198a2"}}>T-shirt</div>
              </div>
              <div style={{textAlign:"center"}} className="d-flex pb-3">
                <div class="material-symbols-outlined p-0 m-0" style={{color:"#49549c"}}>
                  fiber_manual_record
                </div>
                <div style={{fontSize:"14px",color:"#9198a2"}}>Pyjama</div>
              </div>
              <div style={{textAlign:"center"}} className="d-flex pb-3">
                <div class="material-symbols-outlined p-0 m-0" style={{color:"#68c3de"}}>
                  fiber_manual_record
                </div>
                <div style={{fontSize:"14px",color:"#9198a2"}}>Sari</div>
              </div>
              <div style={{textAlign:"center"}} className="d-flex pb-3">
                <div class="material-symbols-outlined p-0 m-0" style={{color:"#dbdbe3"}}>
                  fiber_manual_record
                </div>
                <div style={{fontSize:"14px",color:"#9198a2"}}>Jacket</div>
              </div>
              <div style={{textAlign:"center"}} className="d-flex pb-3">
                <div class="material-symbols-outlined p-0 m-0" style={{color:"#304291"}}>
                  fiber_manual_record
                </div>
                <div style={{fontSize:"14px",color:"#9198a2"}}>Blancket</div>
              </div>
            </div>
            <div className="col-md-4 text-center">
            <div style={{fontSize:"14px",color:"#9198a2",paddingBottom:"1.1rem"}}> 247 sale </div>
            <div style={{fontSize:"14px",color:"#9198a2",paddingBottom:"1.1rem"}}> 232 sale </div>
            <div style={{fontSize:"14px",color:"#9198a2",paddingBottom:"1.1rem"}}> 176 sale </div>
            <div style={{fontSize:"14px",color:"#9198a2",paddingBottom:"1.1rem"}}> 158 sale </div>
            <div style={{fontSize:"14px",color:"#9198a2",paddingBottom:"1.1rem"}}> 126 sale </div>
            <div style={{fontSize:"14px",color:"#9198a2",paddingBottom:"1.1rem"}}> 110 sale </div>
            </div>
            <div className="col-md-4" style={{display:"flex",flexDirection:"column",alignItems:"end"}}>
            <div style={{color:"green",display:"flex",alignItems:"center", fontSize:"14px"}} className="pb-3">
              <span class="material-symbols-outlined">
                arrow_drop_up
               </span> 17.0%
              </div>
              <div style={{color:"green",display:"flex",alignItems:"center", fontSize:"14px"}} className="pb-3">
              <span class="material-symbols-outlined">
                arrow_drop_up
               </span> 10.7%
              </div>
              <div style={{color:"red",display:"flex",alignItems:"center", fontSize:"14px"}} className="pb-3">
              <span class="material-symbols-outlined ">
                    arrow_drop_down
                </span> 12.0%
              </div>
              <div style={{color:"green",display:"flex",alignItems:"center", fontSize:"14px"}} className="pb-3">
              <span class="material-symbols-outlined">
                arrow_drop_up
               </span> 11.8%
              </div>
              <div style={{color:"red",display:"flex",alignItems:"center", fontSize:"14px"}} className="pb-3">
              <span class="material-symbols-outlined">
                    arrow_drop_down
                </span> 10.0%
              </div>
              <div style={{color:"red",display:"flex",alignItems:"center", fontSize:"14px"}} className="pb-3">
              <span class="material-symbols-outlined">
                    arrow_drop_down
                </span> 17.0%
              </div>
            </div>
           </div>            
        </div>
      
    )
};
export default ListData;