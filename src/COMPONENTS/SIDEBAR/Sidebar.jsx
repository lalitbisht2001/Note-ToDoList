import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTasks, faStickyNote, faUser, faPaintBrush, faCode, faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ Open }) => {


    return (
        <div className={`${styles.main} ${Open ? styles.mainopen : styles.hidden}`}>
            <div className={styles.slider}>
                <div className={styles.name}>
                    <p>Hii <span>Name</span></p>
                </div>
                <div className={styles.link}>
                    <span className={styles.span}>
                        <FontAwesomeIcon icon={faHome} className={styles.icon} />
                        <p>Home</p>
                    </span>
                    <span className={styles.span}>
                        <FontAwesomeIcon icon={faTasks} className={styles.icon} />
                        <p>My tasks</p>
                    </span>
                    <span className={styles.span}>
                        <FontAwesomeIcon icon={faStickyNote} className={styles.icon} />
                        <p>My Notes</p>
                    </span>
                </div>
                <div className={styles.list_link}>
                    <p className={styles.list_name}>List</p>
                    <div className={styles.link}>
                        <span className={styles.span}>
                            <FontAwesomeIcon icon={faUser} className={styles.icon} />
                            <p>Personal</p>
                        </span>
                        <span className={styles.span}>
                            <FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
                            <p>Design</p>
                        </span>
                        <span className={styles.span}>
                            <FontAwesomeIcon icon={faCode} className={styles.icon} />
                            <p>Development</p>
                        </span>
                        <span className={styles.span}>
                            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                            <p>Research</p>
                        </span>
                    </div>
                </div>
                <button className={styles.btn}>Logout</button>
            </div>
        </div>
    );
}

export default Sidebar;
