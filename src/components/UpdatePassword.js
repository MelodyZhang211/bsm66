import { Link } from "react-router-dom";
import "./Register.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
function UpdatePassword() {
  return (
    <div className="main">
      <div class="h-100 col d-flex align-items-center justify-content-center">
        <div class="card">
            <h2>Update Password  </h2>
            <br/>
            
            <form>
            
              <div class="form-group">
                <input
                  type="User Name"
                  class="form-control"
                  id="InputUserName"
                  aria-describedby="User Name"
                  placeholder="Melodyzhang2121"
                  readonly
                />
               
              </div>
              <br/>

              <div class="form-group">
                <input
                  type="New Password"
                  class="form-control"
                  id="InputNewPassword"
                  aria-describedby="New Password "
                  placeholder="Enter New Password"
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
                Update
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

export default UpdatePassword;
