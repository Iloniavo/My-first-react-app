function Collapse (props){
    
    const {children , id} = props;

    return (
        <div className="collapse" id={id} aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
        <nav className="sb-sidenav-menu-nested nav">
            {children}
        </nav> 
    </div>
    )
}

export default Collapse;