import { useState } from "react";
import style from "./Login.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignOut = ({ setIsSign }) => {

    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const handleData = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, input.email, input.password);
            setError(false);
            setIsSign(false);
            setInput({
                email: "",
                password: "",
            })
        }
        catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("Email is already in use . Please use another email");
            }
            else if (err.code === "auth/weak-password") {
                setError("Password should be at least 6 characters");
            }
            else {
                setError("An Error occurred. Please try again.");
            }
        }
    }
    const handleSign = () => {
        setIsSign((prev) => !prev);
    }
    return (
        <div className={`${style.loginContainer}`}>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.heading}>
                    SIGN IN
                </div>
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
                <button type="submit" className={style.btn}>Sign In</button>
                <div>
                    <span onClick={handleSign} className={style.btn2}>Login</span>
                </div>
            </form>
        </div>
    )
}

export default SignOut
