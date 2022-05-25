
        function LinkSideWithToggle1 (props){
            const {children} = props
            const { controls ,  target } = props ;
            return (
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={controls}>
                <div className="sb-nav-link-icon">{children}</div>
                {props.name}
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            )
        }
    


export default LinkSideWithToggle1;