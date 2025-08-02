import React, { useState } from 'react';
import EmailCheckError from './utiilities/utiles';


function Signup() {
  const [Name, setName] = useState('');
   const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const[Moblie , setMoblie] = useState('');
  


  //erro validation varibales
  const [NameError , setNameError] = useState('');
  const [EmailError , setEmailError] = useState('');
  const[PasswordError , setPasswordError] = useState('');
  const[MoblieError , setMoblieError] = useState('');

 
  function handleNameError(e) {
    setName(e.target.value);

     if(Name.length < 3) {
      setNameError('Min 3 char');
    }
    else {
      setNameError('');
    }
  }

   function handleEmailError(e) {
    setEmail(e.target.value);
     
    if(EmailCheckError(Email) == false) {
      setEmailError('Invalid Email');
    }
    else {
      setEmailError('');
    }
    
  }


  function handlePasswordError(e) {
    setPassword(e.target.value);
    
    if(Password.length < 8){
      setPasswordError('Min 8 char');
    }
    else {
      setPasswordError('');
    }
  }

  function handleMoblieError(e) {
    setMoblie(e.target.value);

    if(Moblie.length < 10) {
      setMoblieError('Min 10 char');
    }
    else {
      setMoblieError('');
    }

  }



  
 
function ConsoleLog(){
  console.log( NameError.toString(),
   EmailError.toString(),  PasswordError.toString(),  MoblieError.toString());
}
  

  


  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-3">
          <h2 className="text-center text-success">Signup Page</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                onChange={ e=> handleNameError(e)}
                
                type="text"
                className="form-control"
                placeholder="Name"
              />
             <div className=" mt-1 text-danger">{NameError}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange = {e=> handleEmailError(e)}
              />
              <div className=" mt-1 text-danger">{EmailError}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e=> handlePasswordError(e)}
              />
              <div className=" mt-1 text-danger">{PasswordError}</div>
              
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                onChange={e=> handleMoblieError(e)}
              />
              <div className=" mt-1 text-danger"> {MoblieError}</div>
            </div>

            <div className="text-center">
              <button  onClick={ConsoleLog} type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup
