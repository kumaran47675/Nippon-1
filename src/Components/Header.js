
import '../App.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="img1">
                    <img id="blobby-1" src="./CSS/nipponlogo2.png" alt="Blobby" />
                </div>

                <nav>
                    <Link to="/landing">Home</Link>

                    <Link to="">Return</Link>
                </nav>
            </div>
        </>
    );
}
 
export default Header;