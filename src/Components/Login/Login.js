import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useForm } from "react-hook-form";
import './Login.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../App";


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [isNewUser, setIsNewUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        firebase.auth().signInWithEmailAndPassword(data.Email, data.Password)
            .then((res) => {
                const newUserInfo = res.user;
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                handleResponse(newUserInfo, true);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                };
                console.log(signedInUser)
                setUser(signedInUser);
                handleResponse(signedInUser, true)
            }).catch((error) => {
                console.log(error);
            });
    }


    const handleFbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                };
                setUser(signedInUser);
                handleResponse(signedInUser, true)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    return (
        <div className="Login-form">
            {
                isNewUser ? <h1>Create an account</h1> : <h1>LogIn</h1>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    isNewUser && <input className="form-control" name="name" placeholder="Name" ref={register} />
                }
                <br />
                <input className="form-control" name="Email" placeholder="Email" ref={register} />
                <br />
                <input className="form-control" placeholder="Password" name="Password" type="password" ref={register({ required: true })} />
                <br />
                {
                    isNewUser && <input className="form-control" placeholder="Confirm Password" type="password" name="Confirm Password" ref={register({ required: true })} />
                }
                <br />
                <br />
                {isNewUser ? <input className="form-control bg-danger text-white" type="submit" value="Create an account" /> : <input className="form-control bg-danger text-white" type="submit" value="Login" />}
                {isNewUser ? <p>Already have an account? <Link style={{ textDecoration: 'none' }} onClick={() => setIsNewUser(!isNewUser)}>Login</Link></p> : <p>Don't have an account? <Link style={{ textDecoration: 'none' }} onClick={() => setIsNewUser(!isNewUser)}>Create an account.</Link></p>}
            </form>
            <p>user {user.email} loggedIn Successfully</p>
            <br />
            <button className="form-control bg-danger text-white" onClick={handleGoogleSignIn}> Continue with Google Sign In</button>
            <br />
            <br />
            <button className="form-control bg-danger text-white" onClick={handleFbSignIn}>Continue with FaceBook Sign In</button>
        </div>
    );
};

export default Login;