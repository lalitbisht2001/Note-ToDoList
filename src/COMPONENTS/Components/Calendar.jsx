import style from "./Calendar.module.css";
const Calendar = () => {
    return (
        <div className={style.main}>
            <div className={style.week_div}>
                <div className={style.week}>Monday</div>
                <div className={style.week}>Tuesday</div>
                <div className={style.week}>Wednesday</div>
                <div className={style.week}>Thursday</div>
                <div className={style.week}>Friday</div>
                <div className={style.week}>Saturday</div>
                <div className={style.week}>Sunday</div>
            </div>
        </div>
    )
}

export default Calendar
