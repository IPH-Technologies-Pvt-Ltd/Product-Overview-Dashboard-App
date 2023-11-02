import React from "react";
import "../css/left-side-bar.css"
function LeftSideBar () {
    return (
        <div class="sidebar">
          <a class="active" href="#home">
              <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
               dashboard
             </span>
              Dashboard
            </a>
          <a href="#news">
          <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
monitoring
</span> Sales </a>
          <a href="#contact">
          <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
inventory
</span> Inventory </a>
          <a href="#about"> 
          <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
support_agent
</span>Customers </a>
          <a href="#about">
          <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
analytics
</span> Analytics </a>
          <a href="#about">
          <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
paid
</span> Discounts </a>
          <a href="#about">
          <span class="material-symbols-outlined pe-3" style={{color:"gray"}}>
apps
</span>
           Apps </a>
           <span className="sidebar-btn">
              <button className="btn1">VISIT STORE</button>
           </span>
        </div>

    )
};
export default LeftSideBar;