import React,{useState, useContext} from 'react';
import './App.css';

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

//toastify
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import Footer from "./LayOut/Footer"
import {UserContext} from "./Context/UserContext";
import Header from './LayOut/Header';

import FireBaseConfig from "./Config/FireBaseConfig";
// init firebase
firebase.initializeApp(FireBaseConfig);
const App = () => {

  const [user, setUser] = useState(null);
  return (
   <Router>
     <ToastContainer />
       <UserContext.Provider value={{user, setUser}}>
         <Header /> 
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/signIn" element={<SignIn />}/>
            <Route exact path="/signup" element={<SignUp />}/>
            <Route exact path="*" element={<NotFound />}/>
          </Routes>
          <Footer />
       </UserContext.Provider>
   </Router>
  );
}

export default App;
