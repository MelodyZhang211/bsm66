import { Link ,useNavigate} from "react-router-dom";
import "./Register.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";
function ResetPassword() {
    const [correct,setCorrect] = useState(false)
    const navigate = useNavigate();
    const clickOnDetails = () => {
        if (correct){
            console.log(correct)
            navigate("/UpdatePassword")
        }else{
            console.log(correct)
            navigate("/Mismatch")
        }
    
    };

  return (
    <div className="main">
      <div class="h-100 col d-flex align-items-center justify-content-center">
        <div class="card">
          <h2>Forgot Password </h2>
          <br />

          <form>
            <div class="form-group">
              <input
                type="User Name"
                class="form-control"
                id="InputUserName"
                aria-describedby="User Name"
                placeholder="Enter User Name"
              />
            </div>
            <br />

            <div class="dropdown">
              <button
                class="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Who is your Favorite actor
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    What's your mother median name?
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    What is your Favorite song?
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Who is your best friend in kindergarden?
                  </a>
                </li>
              </ul>
            </div>
            <br />

            <div class="form-group">
              <input
                type="Enter Answer"
                class="form-control"
                id="InputConfirmPassword1"
                placeholder="Enter Answer"
              />
            </div>

            <br />
            
            
            
            
            <button onClick={clickOnDetails} type="submit" class="btn btn-primary">
              Get Details
            </button>
           
        
            <br />
            <small id="anounce " class="form-text text-muted">
              Already Have An Customer Account
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                LOGIN HERE
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
