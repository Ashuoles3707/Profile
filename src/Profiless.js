import "./Profile.css";
function Profiless(props) {
    return(
        <div >
            <div className="card">
            <img 
                    src={props.image || "/ima/pro.jpg"} 
                    alt={props.altname || "Profile picture"} 
                    style={{ width: "50%"}} 
                />  
            <h1>{props.name}</h1>
            <p className="title">{props.pro}</p>
            <p>{props.tile}</p>
            <p>{props.mobile}</p>
            <div style={{ margin: "24px 0",paddingleft:"30px" }}>
                
                    <a 
                    href={props.linkdin}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                    </a>
                
                    <a 
                    href={props.github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub">
                    <i className="bi bi-github"></i>
                    </a>
                    
                    <a 
                    href={props.facebook}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                    </a>
            </div>
            <br></br>

            {/* <p><button disabled>Contact</button></p> */}
            </div>
        </div>
    )
}
export default Profiless;
