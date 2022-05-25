

import BodyRealTable from "./BodyRealTable";
import BodyFooter from "./BodyFooter";

function BodyTable (){

return ( 
    <div id="layoutSidenav_content">
         <main>
                    <div class="container-fluid px-4">
        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the 
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <BodyRealTable/>
                        <BodyFooter/>
    </div>
    </main>
    </div>
   
)

}

export default BodyTable;