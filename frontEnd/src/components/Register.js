import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import save from "save";
import "./Register.css";



function Register() {
  const[Name, setUserName] =useState("");
  const[Email,setEmail] =useState("");

 async function save(event)
 {
  event.preventDefault();
  try
  {
    await axios.post("http://localhost:8085/api/v1/user/save",
    {
    userName:Name,
    userEmail:Email
  });
  alert("User Registation Successfully");
  setUserName("");
  setEmail("");
  }
  catch(err)
  {
    console.log(err)
    alert("User Registation Failed")
  }
 }
  return (
    <div className="main">
      <div class="h-100 col d-flex align-items-center justify-content-center">
        <div class="card p-5">
            <h2>Customer Registration</h2>
            <br/>
            
            <form>
            
              <div class="form-group">
                <label>Name</label>
                <input
                  type="User Name"
                  class="form-control"
                  id="InputUserName"
                  aria-describedby="User Name"
                  placeholder="User Name"
                  value={Name}
                  onChange={(event)=>
                  {
                    setUserName(event.target.value)
                  }}
                />
               
              </div>
              <br/>

              <div class="form-group">
                <label>Email</label>
                <input
                  type="Email"
                  class="form-control"
                  id="InputFullName"
                  aria-describedby=" Email"
                  placeholder="Full Name"
                  value={Email}
                  onChange={(event)=>
                  {
                    setEmail(event.target.value)
                  }}
                /> 
                </div>
                <br/>


                {/* <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="InputPassword1"
                  placeholder="Password"
                />
              </div>
              <br/> */}

              {/* <div class="form-group">
                <input
                  type="Confirm Password"
                  class="form-control"
                  id="InputConfirmPassword1"
                  placeholder="Confirm Password"
                />
              </div> */}
            
              <br />
              <button type="submit" class="btn btn-primary" onClick={save}>
                Register
              </button>
              <br />
              <small id="anounce " class="form-text text-muted">
                  Already Have An Customer Account 
                  <Link to="/" style={{ textDecoration: 'none' }}> LOGIN HERE</Link>
                </small>

                 
            </form>
          </div>
        </div>
      </div>
    
  );
}

export default Register;
