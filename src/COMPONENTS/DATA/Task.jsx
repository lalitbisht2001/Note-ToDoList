import { useState } from 'react';
import Sound from "/Sound.wav";
import style from "./Task.module.css";

const Task = () => {
    const [dateTime, setDateTime] = useState('');
    const [message, setMessage] = useState('');
    const [alarmSet, setAlarmSet] = useState(false);
    const [alarmActive, setAlarmActive] = useState(false);
    const [alarmSound, setAlarmSound] = useState(null);

    const handleDateTimeChange = (e) => {
        setDateTime(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSetAlarm = () => {
        if (!dateTime || !message) {
            alert('Please set both the date, time, and message.');
            return;
        }

        const alarmTime = new Date(dateTime).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = alarmTime - currentTime;

        if (timeDifference <= 0) {
            alert('Please select a future time.');
            return;
        }

        setAlarmSet(true);
        setAlarmActive(true);

        const sound = new Audio(Sound);
        setAlarmSound(sound);

        setTimeout(() => {
            if (alarmActive) {
                sound.play();
            }
            setAlarmSet(false);
        }, timeDifference);
    };

    const handleStopAlarm = () => {
        if (alarmSound) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
        setAlarmActive(false);

    };

    return (
        <div className={style.main}>
            <p className={style.heading}>TASK</p>
            <div className={style.div_box}>
                <div className={style.subdata}>
                    <p>Date & Time: </p>
                    <input
                        type="datetime-local"
                        value={dateTime}
                        onChange={handleDateTimeChange}
                    />
                </div>
                <div className={style.subdata}>
                    <p> Message:</p>
                    <input
                        type="text"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Alarm message"
                    />
                </div>
                <div className={style.topic_div}>
                    {alarmSet && <div>
                        <p className={style.topic}>
                            Alarm set for {new Date(dateTime).toLocaleString()}
                        </p>
                        <p style={{ color: "purple" }}>
                            ({message})
                        </p>
                    </div>
                    }
                </div>
            </div>
            <div className={style.btn_div}>
                <button onClick={handleSetAlarm} disabled={alarmSet} className={style.btn}>
                    {alarmSet ? 'Alarm Set' : 'Set Alarm'}
                </button>
                <button onClick={handleStopAlarm} className={style.btn}>Stop Alarm</button>
            </div>
        </div>
    );
};

export default Task;
