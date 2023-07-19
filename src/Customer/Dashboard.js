import banking_large from "../banking_large.png";
import { Link } from "react-router-dom";
import "./Dashboard.css";
export function Dashboard() {
  return (
    <>
        <div class="modal-body row">
        <div class="col-lg-6  text-center">
            <div class="card h-100 d-flex align-items-center justify-content-center">
            <div class="card-body">
              <a
                class="nav-link center-block text-center"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Create Amount
              </a>
              <a
                class="nav-link center-block text-center"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Add Beneficiary
              </a>
              <a
                class="nav-link center-block text-center"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Remove Beneficary
              </a>
              <a
                class="nav-link center-block text-center"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Tansfter Money
              </a>

              <a
                class="nav-link center-block text-center"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                View Statement
              </a>
            </div>
            </div>
            </div>
            <div class="col-lg-6  text-center">
          <div class="card h-100  d-flex align-items-center justify-content-center">
          <div class="card-body">
          <h5 class="card-title">Create Account Form</h5>
                <form>
                
                <div class="form-group">
                    
                  <label for="exampleInputEmail1"></label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Initial Deposit"
                  />
                 
                </div>

                </form>

                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label class="form-check-label" for="flexRadioDefault1">
                    Savings Bank
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                <label class="form-check-label" for="flexRadioDefault2">
                    Current Account
                </label>
                </div>
                <div class="text-center">
                <button type="submit" class="btn btn-primary ">
                  Submit
                </button>
                </div>
                </div>
                </div>
                </div>
            

                <br />
                </div>
      </>
  )
}