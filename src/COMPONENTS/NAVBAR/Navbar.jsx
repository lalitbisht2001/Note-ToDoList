import styles from "./Navbar.module.css";
import Photo from "/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import useSidebar from "../../HOOKS/useSidebar";

const Navbar = ({ Open, handleMenubar }) => {

    return (
        <div className={styles.main}>
            <div className={styles.menubar} onClick={handleMenubar}>
                {
                    Open ?
                        <FontAwesomeIcon icon={faTimes} className={styles.icon} />
                        :
                        <FontAwesomeIcon icon={faBars} className={styles.icon} />
                }
            </div>
            <div className={styles.name}>
                <p>ToDo<span>List</span></p>
            </div>
            <div className={styles.photo_div}>
                <img src={Photo} alt="" />
            </div>
        </div>
    )
}

export default Navbar
