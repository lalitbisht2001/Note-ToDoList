import style from "./Timeline.module.css";

const Timeline = ({ isUserLogin, setIsUserLogin }) => {
    return (
        <div className={style.main}>
            {
                isUserLogin ? (
                    <button onClick={() => setIsUserLogin(false)} className={style.btn}>Logout</button>
                )
                    : (
                        <div className={style.heading}>
                            WelCome To The ToDoList Application.
                            <p> For Login Go to Account</p>
                        </div>
                    )
            }
        </div>
    )
}

export default Timeline
