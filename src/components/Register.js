import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="main">
      <div class="h-100 col d-flex align-items-center justify-content-center">
        <div class="card">
            <h2>Customer Registration</h2>
            <br/>
            
            <form>
            
              <div class="form-group">
                <input
                  type="User Name"
                  class="form-control"
                  id="InputUserName"
                  aria-describedby="User Name"
                  placeholder="User Name"
                />
               
              </div>
              <br/>

              <div class="form-group">
                <input
                  type="Full Name"
                  class="form-control"
                  id="InputFullName"
                  aria-describedby="Full Name"
                  placeholder="Full Name"
                /> 
                </div>
                <br/>


                <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="InputPassword1"
                  placeholder="Password"
                />
              </div>
              <br/>

              <div class="form-group">
                <input
                  type="Confirm Password"
                  class="form-control"
                  id="InputConfirmPassword1"
                  placeholder="Confirm Password"
                />
              </div>
            
              <br />
              <button type="submit" class="btn btn-primary">
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
