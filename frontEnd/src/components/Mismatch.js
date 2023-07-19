import { Link } from "react-router-dom";
import "./Register.css";

function Mismatch() {
  return (
    <div className="main">
      <div class="h-100 col d-flex align-items-center justify-content-center">
        <div class="card">
          <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>

          <small id="anounce " class="form-text text-muted">
            Already Have An Customer Account
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              LOGIN HERE
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Mismatch;
