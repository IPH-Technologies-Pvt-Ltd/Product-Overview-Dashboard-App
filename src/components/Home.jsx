import React from "react";
import "../css/basic.css"
import LeftSideBar from "./LeftSideBar";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import CustomerAreaChart from "./CustomerAreaChart";
import AvgLineChart from "./AvgLineChart";
import ListData from "./ListData";
import ToatalSale from "./TotalSale";
import Points from "./Points";
function Home () {
    return (
        <div className="section">
        <div className="container-fluid py-5">
        <div className="row">
                <div className="col-md-2 p-0">
                    <LeftSideBar />
                </div>
                <div className="col-md-10 pe-4">
                    <div className="row mb-4">
                        <div className="col-md-8">
                        <div className="card pt-2 border-0">
                        <div className="row">
                                <div className="col-md-4">
                                    <ToatalSale />
                                </div>
                                <div className="col-md-8">
                                    <LineChart />
                                </div>
                                <div><Points /></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                         <div className="card pt-2 border-0">
                         <AreaChart />
                         </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card border-0">
                        <CustomerAreaChart />
                        </div>
                           
                        </div>
                        <div className="col-md-4">
                        <div className="card border-0">
                        <AvgLineChart />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card border-0">
                        <ListData />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
};
export default Home;