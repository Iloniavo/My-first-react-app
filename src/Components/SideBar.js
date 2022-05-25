import LinkSide from "./LinkSide";
import LinkSideWithToggle1 from "./LinkSideWithToggle1";
import LinkInToggle1 from "./LinkInToggle1";
import Collapse from "./Collapse";



function SideBar (){
   
    return (
        <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                         <LinkSide name="Dashboard"><svg className="svg-inline--fa fa-gauge-high" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gauge-high" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"></path></svg></LinkSide>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <LinkSideWithToggle1 name="Layouts" controls="collapseLayouts" target="#collapseLayouts" ><svg className="svg-inline--fa fa-table-columns" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table-columns" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM64 416H224V160H64V416zM448 160H288V416H448V160z"></path></svg></LinkSideWithToggle1>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <LinkSideWithToggle1 name="Pages" controls="collapsePages" target="#collapsePages"><i className="fas fa-book-open"></i></LinkSideWithToggle1>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <LinkInToggle1 name="Authentification" controls="pagesCollapseAuth" target="#pagesCollapseAuth"></LinkInToggle1>
                                         <Collapse id="pagesCollapseAuth">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </Collapse>
          
                                <LinkInToggle1 name="Error" controls="pagesCollapseError" target="#pagesCollapseError"></LinkInToggle1>
          
                                         <Collapse id="pagesCollapseError">
                                            <a className="nav-link" href="login.html">401</a>
                                            <a className="nav-link" href="register.html">404</a>
                                            <a className="nav-link" href="password.html">500</a>
                                        </Collapse>
          
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <LinkSide name="Charts"><i className="fas fa-chart-area"></i></LinkSide>
                            <LinkSide name="Tables"><svg className="svg-inline--fa fa-table" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z"></path></svg></LinkSide>
                       <br></br><br></br><br></br><br></br>
                        </div>
                        <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                    </div>
                    
            </nav>

</div>
    )
}

export default SideBar;
