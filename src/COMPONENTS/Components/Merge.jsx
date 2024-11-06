import Calendar from "./Calendar";
import style from "./Merges.module.css";
import { useEffect, useState } from "react";
import Overview from "./Overview";
import List from "./List";
import Account from "./Account";
import Timeline from "./Timeline";
import MergeNav from "./MergeNav";

const Merge = () => {
    const [currentTimeDate, setCurrentTimeDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTimeDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const date = currentTimeDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    const [isOpen, setIsOpen] = useState('Overview');
    const handlePage = (e) => {
        setIsOpen(e);
    }

    const [isUserLogin, setIsUserLogin] = useState(() => {
        return JSON.parse(localStorage.getItem("isUserLogin")) || false;
    });


    const [email, setEmail] = useState(() => {
        return localStorage.getItem("email") || "";
    });

    useEffect(() => {
        localStorage.setItem("isUserLogin", JSON.stringify(isUserLogin));
        if (isUserLogin) {
            localStorage.setItem("email", email);
        } else {
            localStorage.removeItem("email");
        }
    }, [isUserLogin, email]);

    const pages = {
        Overview: <Overview email={email} />,
        List: <List email={email} />,
        Account: <Account isUserLogin={isUserLogin} email={email} setIsUserLogin={setIsUserLogin} setEmail={setEmail} />,
        Timeline: <Timeline isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin}/>,
        Calendar: <Calendar />,
    };
    return (
        <div className={style.main}>
            <MergeNav handlePage={handlePage} date={date} />
            <div className={style.page}>
                {
                    pages[isOpen]
                }
            </div>
        </div>
    );
};

export default Merge;
