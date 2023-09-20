import { Link } from "react-router-dom";
const Landing = ({username}) => {
    return ( 
        <div className="menu-container">
            <h3>Hello {username}</h3> 
            <div className="menu-heading">
                <img src="./CSS/menu_icon.png" style={{width:"16px"}} /> 
                <h2>Menu</h2>
            </div>
            <ul>
            
                <li> <Link to="/observation">Observation</Link></li>
                <li> <Link to="/tinting">Tinting-Banco & D180-Bangalore</Link></li>
                <li> <Link to="">Colourants-Banco & D180-Bangalore</Link></li>
                <li> <Link to="">Asset-Banco & D180-Bangalore</Link></li>
                <li> <Link to="">Tinting-Noombal</Link></li>
                <li> <Link to="">Colourants-Noombal</Link></li>
                <li> <Link to="">Asset-Noombal</Link></li>
                <li> <Link to="">Tinting-Madurai</Link></li>
                <li> <Link to="">Colourants-Madurai</Link></li>
                <li> <Link to="">Asset-Madurai</Link></li>
                <li> <Link to="">Tinting-Coimbatore</Link></li>
                <li> <Link to="">Colourants-Coimbatore</Link></li>
                <li> <Link to="">Asset-Coimbatore</Link></li>
                <li> <Link to="">Tinting-Hyderabad</Link></li>
                <li> <Link to="">Colourants-Hyderabad</Link></li>
                <li> <Link to="">Asset-Hyderabad</Link></li>
                <li> <Link to="">Tinting-Vijayawada</Link></li>
                <li> <Link to="">Colourants-Vijayawada</Link></li>
                <li> <Link to="">Asset-Vijayawada</Link></li>
                <li> <Link to="">Tinting-Vizag</Link></li>
                <li> <Link to="">Colourants-Vizag</Link></li>
                <li> <Link to="">Asset-Vizag</Link></li>
                <li> <Link to="">Tinting-CTC Park Town</Link></li>
                <li> <Link to="">Colourants-CTC Park Town</Link></li>
                <li> <Link to="">Asset-CTC Park Town</Link></li>
                <li> <Link to="">Tinting-Salem</Link></li>
                <li> <Link to="">Colourants-Salem</Link></li>
                <li> <Link to="">Asset-Salem</Link></li>
                <li> <Link to="">Tinting-Hubli</Link></li>
                <li> <Link to="">Colourants-Hubli</Link></li>
                <li> <Link to="">Asset-Hubli</Link></li>
                <li> <Link to="">Tinting-Mangalore</Link></li>
                <li> <Link to="">Colourants-Mangalore</Link></li>
                <li> <Link to="">Asset-Mangalore</Link></li>
                <li> <Link to="">Tinting-Kalburgi</Link></li>
                <li> <Link to="">Colourants-Kalburgi</Link></li>
                <li> <Link to="">Asset-Kalburgi</Link></li>
                <li> <Link to="">Tinting-Villupuram-Pondy</Link></li>
                <li> <Link to="">Colourants-Villupuram-Pondy</Link></li>
                <li> <Link to="">Asset-Villupuram-Pondy</Link></li>
                <li> <Link to="">Tinting-Trichy</Link></li>
                <li> <Link to="">Colourants-Trichy</Link></li>
                <li> <Link to="">Asset-Trichy</Link></li>
                <li> <Link to="">Tinting-Mysore</Link></li>
                <li> <Link to="">Colourants-Mysore</Link></li>
                <li> <Link to="">Asset-Mysore</Link></li>
            </ul>
           
        </div>
     );
}
 
export default Landing;