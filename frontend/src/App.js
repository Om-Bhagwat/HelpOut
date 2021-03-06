/* eslint-disable default-case */
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import fire from './Firebase/fire';

import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import MedDetails from './components/Medetails/medDetails';

import './App.css';


function App() {


  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailerr,setEmailErr] = useState('');
  const [passworderr, setPasswordErr] = useState('');
  const [hasAccount,sethasAccount]=useState(false);
  const[name,setName] = useState('');
  const[ph_number,setPhone] = useState('');
  const[empID,setEmpoyeeId] = useState('');
  const[isCustomer,setCustomer] = useState(true);
  const[isEmployee,setEmployee] = useState(false);


  const[cusname,setCusName] = useState('');
  const[phoneno,setPhoneNo] = useState('');
  const[medicinename,setMedicineName] = useState('');
  const[medicineQuantity,setMedicineQuantity] = ('');
  const[datee,setDatee] = useState('');

  //*Use to clear the inputs
  //! Do not edit this function.(Ask me.! @Om-Bhagwat)
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }


  //*Use to clear the errors which are store in the useState.
  //! Do not Edit this Function.(Ask me.! @Om-Bhagwat)
  const clearErrors=()=>{
    setEmailErr('');
    setPasswordErr('');
  }

    //*Login function provided by the FireBase.
  //! Do not edit this function.(Ask me.! @Om-Bhagwat)
  const handleLogin=async()=>{
    clearErrors();
      fire.auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailErr(err.message);
              break;

            case "auth/wrong-password":
              setPasswordErr(err.message);
              break; 
          }
      });

      // if(isCustomer){
      //   try{
      //         const resp = await axios.post('http://localhost:5000/users/getdetail',{
      //           email
      //         },);

      //         console.log(resp);
      //     }catch(error){
      //         console.log(error);
      //     }
      // }else{
      //     try{
      //         const resp = await axios.post('http://localhost:5000/users/getempdetail',{
      //           email
      //         },);

      //         console.log(resp);
      //     }catch(error){
      //         console.log(error);
      //     }
      // }

  }

  const handleSignup=async()=>{
    clearErrors();
    fire.auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailErr(err.message);
              break;

            case "auth/weak-password":
              setPasswordErr(err.message);
              break; 
          }
      });


      //!Do not change the below code Ask (@Om-Bhagwat).
      //*Retrives the name from the backend for now.
      //Todo: More data Required??.
      // try{
      //   console.log(name);
      //   console.log(email);
      //   console.log(password);
      //   console.log(ph_number);
      //     const response = await axios.post('http://localhost:5000/users/adduser',{
      //         name,
      //         email,
      //         password,
      //         ph_number

      //     },);
      //     console.log(response);
      // }catch(error){
      //     console.log(error);
      // }
  }

   //! Logout Function do not change(Ask me !Om-Bhagwat)
   const handleLogout=()=>{
    fire.auth().signOut();
  }

  const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
        if(user){
          clearInputs();
          setUser(user);
        }else{
          setUser("");
        }
    })
  }

  useEffect(()=>{
    authListener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div>
        <Router>
           {/* Takes to homepage with Navbar. */}
              <Route path="/" exact render={(props)=>(
                <Homepage {...props} user={user} handleLogout={handleLogout} name={name} isCustomer={isCustomer} isEmployee={isEmployee} email={email} />
              )} />
              <Route path="/medDetails" exact render={(props)=>(
                <MedDetails {...props} cusname={cusname} setCusName={setCusName} handleLogout={handleLogout} phoneno={phoneno} setPhoneNo={setPhoneNo} medicinename={medicinename} setMedicineName={setMedicineName} medicineQuantity={medicineQuantity} setMedicineQuantity={setMedicineQuantity} datee={datee} setDatee={setDatee} 
                />
              )} />
              <Route path="/login" exact render={(props)=>(
                <Login 
                {...props}
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin} 
                handleSignup={handleSignup} 
                hasAccount={hasAccount}
                sethasAccount={sethasAccount}
                emailerr={emailerr}
                passworderr={passworderr}
                name = {name}
                setName = {setName}
                ph_number = {ph_number}
                setPhone = {setPhone}
                empID = {empID}
                setEmpoyeeId = {setEmpoyeeId}
                isCustomer = {isCustomer}
                setCustomer = {setCustomer}
                isEmployee = {isEmployee}
                setEmployee = {setEmployee}
                />
              )} />
              
        </Router>
    </div>
  );
}

export default App;
