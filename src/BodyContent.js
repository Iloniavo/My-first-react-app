import BodyTable from "./Components/BodyTable.js";
import SideBar from "./Components/SideBar.js";

function BodyContent(){
    return (
        <div id="layoutSidenav">
            <SideBar/>
            <BodyTable/>
        </div>
        
    )
}

export default BodyContent;