import banking_large from "../banking_large.png";
import { Link } from "react-router-dom";
import './Home.css'
export function Home() {
  return (
    <>
        <div className="card">
          <div class="modal-body row">
            <div class="col-md-6 text-center">
              <img src={banking_large} class="img-fluid"></img>
              <h3> Your Personal Banking Partner</h3>
            </div>

            <div class="col-md-6 text-center">
              <div class="h-100 d-flex align-items-center justify-content-center">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/ResetPassword">Forgot Password </Link>
                  <br/>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <p>
                    Not a customer? <Link to="/register">Register Here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
