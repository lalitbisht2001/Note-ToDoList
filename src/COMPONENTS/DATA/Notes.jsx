import { useEffect, useState } from "react";
import style from "./Notes.module.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { app3 } from "../../firebase";

const db = getFirestore(app3);

const Notes = ({ email }) => {

    const [newTimeDate, setNewTimeDate] = useState(new Date());
    const [input, setInput] = useState({
        title: "",
        content: "",
        email: email,
    });

    const formattedDate = newTimeDate.toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
    });
    const formattedTime = newTimeDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
    });


    const handleData = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "Note-Data"), {
                title: input.title,
                content: input.content,
                email: email,
                date: formattedDate,
                time: formattedTime,
            });
            alert("Note submitted successfully!");
            setInput({ title: "", content: "", email: email });
        } catch (err) {
            console.error("Error submitting note:", err);
        }
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setNewTimeDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const [count, setCount] = useState(input.content.length);
    useEffect(() => {
        setCount(input.content.length);
    }, [input.content]);

    return (
        <div className={style.main}>
            <div className={style.input_div}>
                <input
                    placeholder="Title"
                    className={style.title}
                    name="title"
                    value={input.title}
                    onChange={handleData}
                />
                <div className={style.date_time}>
                    {formattedDate} {formattedTime} | {count} characters
                </div>
                <textarea
                    placeholder="Start Typing"
                    className={style.content}
                    name="content"
                    value={input.content}
                    onChange={handleData}
                />
            </div>
            <div className={style.btn_div}>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Notes;
