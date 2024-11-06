import { useState } from "react";
import styles from "./Overview.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Notes from "../DATA/Notes";
import Task from "../DATA/Task";


const Overview = ({ email }) => {
    const [Open, setOpen] = useState(true);
    const handleNote = () => {
        setOpen(prev => !prev);
    }
    const [selectBox, setSelectBox] = useState('');

    const handleBox = (e) => {
        setSelectBox(e);
    }
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <div className={styles.list_div} onClick={handleNote} style={{ color: Open ? "black" : "rgb(136, 136, 136)" }}>
                    <FontAwesomeIcon icon={faStickyNote} className={styles.logo} />
                    <p> Notes</p>
                </div>
                <div className={styles.note_div} onClick={handleNote} style={{ color: Open ? "rgb(136, 136, 136)" : "black" }}>
                    <FontAwesomeIcon icon={faTasks} className={styles.logo} />
                    <p>Tasks</p>
                </div>
            </div>
            <div>
                {
                    Open ? (
                        <div className={styles.note}>
                            {
                                selectBox === 'Note' ? (
                                    <Notes email={email} />
                                ) :
                                    (
                                        <FontAwesomeIcon icon={faPlusCircle} className={styles.add_btn} onClick={() => handleBox('Note')} />
                                    )
                            }
                        </div>
                    ) : (
                        <div className={styles.note}>
                            {
                                selectBox === 'Task' ? (
                                    <Task />
                                ) :
                                    (
                                        <FontAwesomeIcon icon={faPlusCircle} className={styles.add_btn} onClick={() => handleBox('Task')} />
                                    )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Overview
