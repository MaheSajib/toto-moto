import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);



    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const final = result.user;
                console.log(final);
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleFbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                console.log(result.user);
                var accessToken = credential.accessToken;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="Login-form">
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Email</h5>
                <input name="example"  ref={register} />
                <br/>
                <h5>Password</h5>
                <input name="exampleRequired" ref={register({ required: true })} />
                <br/>
                <br/>
                <input className="bg-danger text-white" type="submit" Value="Login"/>
            </form>
            <br/>
            <button onClick={handleGoogleSignIn}>Continue with Google Sign In</button>
            <br/>
            <br/>
            <button onClick={handleFbSignIn}>Continue with FaceBook Sign In</button>
        </div>
    );
};

export default Login;