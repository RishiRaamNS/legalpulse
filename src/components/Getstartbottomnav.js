import { Link, useNavigate } from "react-router-dom";

export default function Getstartbottomnav(props) {
    const navigate = useNavigate();
    return ( <nav className="navbar-bottom">
        <button onClick={() => navigate(-1)} className="back">Back</button>
        
        <div>     
           <button className="add">{props.botButton}</button>
        </div>
        
    </nav> );
}

