function LinkInToggle1 (props){
const { target , controls} = props;
    return (
      
            <a className="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={controls}>
                {props.name}
        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
           
        
    )
}

export default LinkInToggle1;