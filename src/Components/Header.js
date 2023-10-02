// import '../login.css'
import headerCSS from './Header.module.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className={headerCSS.header}>
                <div className={headerCSS.img1}>
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