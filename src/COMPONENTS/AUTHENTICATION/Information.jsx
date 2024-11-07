import { useState, useEffect } from "react";
import style from "./Information.module.css";
import { getFirestore, collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { app2 } from "../../firebase";
import Display from "/Display.jpg";

const db = getFirestore(app2);

const Information = ({ Email }) => {
    const [input, setInput] = useState({
        name: "",
        phone: "",
        address: "",
        age: "",
        occupation: "",
        email: Email,
    });

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const collectionRef = collection(db, "personal_information");
                const emailQuery = query(collectionRef, where("email", "==", Email));
                const querySnapshot = await getDocs(emailQuery);

                if (!querySnapshot.empty) {
                    const data = querySnapshot.docs[0].data();
                    setUserData(data);

                }
            } catch (error) {
                console.error("Error fetching document: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [Email]);

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
            const collectionRef = collection(db, "personal_information");
            const emailQuery = query(collectionRef, where("email", "==", input.email));
            const querySnapshot = await getDocs(emailQuery);

            if (!querySnapshot.empty) {
                alert("An account with this email already exists.");
                return;
            }

            await addDoc(collectionRef, input);
            alert("Information submitted successfully!");
            setUserData(input);
            setInput({
                name: "",
                phone: "",
                address: "",
                age: "",
                occupation: "",
                email: Email,
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to submit information.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.main}>
            <div className={style.heading}>Personal Information</div>
            {userData ? (
                <div className={style.display_info}>
                    <div className={style.photo_div}>
                        <img src={Display} alt="" />
                    </div>
                    <div className={style.info_div}>
                        <div className={style.form_}>
                            <p className={style.form_heading_data}>Name</p>
                            <p className={style.form_data}>{userData.name}</p>
                        </div>
                        <div className={style.form_}>
                            <p className={style.form_heading_data}>Email</p>
                            <p className={style.form_data}>{userData.email}</p>
                        </div>
                        <div className={style.form_}>
                            <p className={style.form_heading_data}>Mobile Number</p>
                            <p className={style.form_data}>{userData.phone}</p>
                        </div>
                        <div className={style.form_}>
                            <p className={style.form_heading_data}>Address</p>
                            <p className={style.form_data}>{userData.address}</p>
                        </div>
                        <div className={style.form_}>
                            <p className={style.form_heading_data}>Age</p>
                            <p className={style.form_data}>{userData.age}</p>
                        </div>
                        <div className={style.form_}>
                            <p className={style.form_heading_data}>Occupation</p>
                            <p className={style.form_data}>{userData.occupation}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form_}>
                        <p>Name</p>
                        <input type="text" name="name" value={input.name} onChange={handleData} />
                    </div>
                    <div className={style.form_}>
                        <p>Email</p>
                        <input name="email" value={Email} readOnly />
                    </div>
                    <div className={style.form_}>
                        <p>Mobile Number</p>
                        <input type="tel" name="phone" value={input.phone} onChange={handleData} />
                    </div>
                    <div className={style.form_}>
                        <p>Address</p>
                        <input type="text" name="address" value={input.address} onChange={handleData} />
                    </div>
                    <div className={style.form_}>
                        <p>Age</p>
                        <input type="text" name="age" value={input.age} onChange={handleData} />
                    </div>
                    <div className={style.form_}>
                        <p>Occupation</p>
                        <input type="text" name="occupation" value={input.occupation} onChange={handleData} />
                    </div>
                    <div className={style.btn_div}>
                        <button type="submit" className={style.btn}>Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Information;
