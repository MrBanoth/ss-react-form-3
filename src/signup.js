import React, { useState } from 'react';
import EmailCheckError from './utiilities/utiles';
import axios from 'axios';


function Signup() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Moblie, setMoblie] = useState('');
  const [dataOK, setDataOK] = useState('');
  const [dataNo, setDataNo] = useState('');



  //erro validation varibales
  const [NameError, setNameError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [MoblieError, setMoblieError] = useState('');


  function handleNameError(e) {
    setName(e.target.value);
  }

  function handleEmailError(e) {
    setEmail(e.target.value);
  }


  function handlePasswordError(e) {
    setPassword(e.target.value);

  }

  function handleMoblieError(e) {
    setMoblie(e.target.value);


  }



  async function handleSubmitButton(e) {
    e.preventDefault();
    let Error = 0;

    if (Name.length < 3) {
      setNameError('Min 3 char');
      Error++;
    } else {
      setNameError('');
    }

    if (EmailCheckError(Email) === false) {
      setEmailError('Invalid Email');
      Error++;
    } else {
      setEmailError('');
    }

    if (Password.length < 8) {
      setPasswordError('Min 8 char');
      Error++;
    } else {
      setPasswordError('');
    }

    if (Moblie.length < 10) {
      setMoblieError('Min 10 char');
      Error++;
    } else {
      setMoblieError('');
    }

    console.log("Total Errors:", Error);

    if (Error == 0) {
      console.log(" api");
      var apiInputs = {
        "email": Email,
        "name": Name,
        "password": Password,
        "mobile": Moblie
      }
      var Response = await axios.post('https://api.softwareschool.co/auth/signup', apiInputs);
      var Results = Response.data.result
      if (Results === "SUCCESS") {
        setDataOK("Signup successful!");
        setDataNo(""); // clear error message
      } else {
        setDataNo("Signup failed. Please try again.");
        setDataOK(""); // clear success message
      }



    }
    else {
      console.log(" no api");
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-3">
          <h2 className="text-center text-success">Signup Page</h2>
          <div className=" mt-1 text-success">{dataOK}</div>
          <div className=" mt-1 text-danger">{dataNo}</div>
          <form>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                onChange={e => handleNameError(e)}

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
                onChange={e => handleEmailError(e)}
              />
              <div className=" mt-1 text-danger">{EmailError}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => handlePasswordError(e)}
              />
              <div className=" mt-1 text-danger">{PasswordError}</div>

            </div>

            <div className="mb-3">
              <label className="form-label">Mobile:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                onChange={e => handleMoblieError(e)}
              />
              <div className=" mt-1 text-danger"> {MoblieError}</div>
            </div>

            <div className="text-center">
              <button onClick={handleSubmitButton} type="submit" className="btn btn-primary">
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
