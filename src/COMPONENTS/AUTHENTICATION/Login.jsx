import {useState } from "react";
import style from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
import SignOut from "./SignOut.jsx";

const Login = ({ setIsUserLogin, setEmail }) => {
    
    const [isSign, setIsSign] = useState(false);
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleSign = () => {
        setIsSign(true);
    };

    const handleData = (e) => {
        const { value, name } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCred = await signInWithEmailAndPassword(auth, input.email, input.password);
            setIsUserLogin(true);
            setEmail(userCred.user.email);
            setInput({
                email: "",
                password: "",
            });
        } catch (err) {
            if (err.code === "auth/user-not-found") {
                setError("User not found. Please sign up first.");
            } else if (err.code === "auth/wrong-password") {
                setError("Incorrect password. Please try again.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <>
            {isSign ? (
                <SignOut setIsSign={setIsSign} />
            ) : (
                <div className={style.loginContainer}>
                    <form onSubmit={handleSubmit} className={style.form}>
                        <div className={style.heading}>LOGIN</div>
                        <div className={style.div_box}>
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={handleData}
                                placeholder="Enter the email"
                                required
                                className={style.input}
                            />
                        </div>
                        <div className={style.div_box}>
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={handleData}
                                placeholder="Enter the password"
                                required
                                className={style.input}
                            />
                            {error && <div className={style.error}>{error}</div>}
                        </div>
                        <button type="submit" className={style.btn}>Log In</button>
                        <span onClick={handleSign} className={style.btn2}>Sign up</span>
                    </form>
                </div>
            )}
        </>
    );
};

export default Login;
