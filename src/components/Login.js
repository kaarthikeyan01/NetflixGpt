import { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [isSignInForm,setIsSignInForm] = useState(false);
    const [errorMessage,setErrorMessage]=useState(null);

    const navigate=useNavigate();

    const email=useRef(null);
    const password=useRef(null);

    const toggleIsSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
    
    const handleButtonClick=()=>{
        console.log(email);
        const message=Validate(email.current.value , password.current.value);
        console.log(email);
        setErrorMessage(message);
        if(message){
           return;
        }
        if(isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage);
              // ..
            });  
             
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage);
            });
          
        }
    };
   
    return (
     <div>
         <div className="absolute">
            <Header/>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg" alt="background"/>
        </div>
        <div className="flex justify-center items-center h-screen">
        <form  onSubmit={(e)=>e.preventDefault()}  className="absolute h-[400px] flex flex-col bg-black  w-[280px] bg-opacity-75 rounded-xl">
            <h1 className="mb-4 mt-6 mx-2 text-white text-bold text-3xl">{isSignInForm?"Sign Up":"Sign In"}</h1>
            <input type="text" ref={email} placeholder="Email Address" className="mt-8 mb-2 p-2 mx-2 rounded-md bg-gray-800 text-white"/>
            {isSignInForm && (
                <input type="text"  placeholder="Name" className="my-2 mx-2 p-2 bg-gray-800 text-white rounded-md"/>
            )}
            <input type="password" ref={password} placeholder="Password" className="m-2 p-2 rounded-md bg-gray-800  text-white"/>
            <p className="text-red-600 m-2">{errorMessage}</p>
            <button className="bg-red-600 my-4 p-2 mx-2 rounded-md text-white " onClick={handleButtonClick}>{isSignInForm?"Sign Up":"Sign In"}</button>
            <p className="text-white my-2 mx-2" onClick={toggleIsSignIn}>{isSignInForm?"Alredy registered? click to Sign in":"Are you new? click to sign up"}</p>
        </form>
        </div>
     </div>
    
    );
};
export default Login; 