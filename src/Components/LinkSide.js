function LinkSide (props){

    return( 
       <a className="nav-link" href="#">
        <div className="sb-nav-link-icon">{props.children}</div>
            {props.name}
        </a>
            )
}

export default LinkSide;