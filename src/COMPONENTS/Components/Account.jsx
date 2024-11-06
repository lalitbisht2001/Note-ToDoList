import Login from '../AUTHENTICATION/Login';
import Information from '../AUTHENTICATION/Information';

const Account = ({ isUserLogin, email, setIsUserLogin, setEmail }) => {

    return (
        <div>
            {
                isUserLogin ? (
                    <Information Email={email} />
                ) : (
                    <Login setIsUserLogin={setIsUserLogin} setEmail={setEmail} />
                )
            }
        </div>
    );
}

export default Account;
