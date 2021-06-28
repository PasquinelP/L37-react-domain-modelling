import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "./utils";
import { patients, dentists, assistants } from "./Data";



const App = () => {

const [state, setState] = useState({
  patients: [],
  dentists: [],
  assistants: [],
  appointments: [],
});

useEffect(() => {
  const newAppointments = generateRandomAppointments(150);
  setState({
    patients: patients,
    dentists: dentists,
    assistants: assistants,
    appointments: newAppointments,
  })
}, [])

console.log(state.appointments);

const addDentist = (newFirstName, newLastName, newPhone, newEmail) => {
  // event.preventDefault();
  console.log("Hallo from dentist");
  const newDentist = {
    id: state.dentists.length + 1,
    first_name: newFirstName,
    last_name: newLastName,
    phone: newPhone,
    email: newEmail,
    role: "dentist",
    isSick: false,
  };

  const dentistsState = [...state.dentists, newDentist];
  console.log("De dentiststate is: ", dentistsState);
  setState((prevState) => {
    return { ...prevState, dentists: dentistsState };
  });
};

console.log("State is: ", state);

console.log("De nieuwe state dentist is", state.dentists);


const addPatient = (newFirstName, newLastName, newPhone, newEmail, newYear) => {
  // event.preventDefault();
  console.log("Hallo from patient");
  const newPatient = {
    id: state.patients.length + 1,
    first_name: newFirstName,
    last_name: newLastName,
    phone: newPhone,
    email: newEmail,
    birthYear: newYear,
    isSick: false,
  };

  const patientsState = [...state.patients, newPatient];
  console.log("De patientstate is: ", patientsState);
  setState((prevState) => {
    return { ...prevState, patients: patientsState };
  });
};


console.log("De nieuwe state patients is", state.patients);

const removeAppointment = (appointmentId) => {
  
}




  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={state.appointments} />
            </Route>
            <Route path="/day">
              <Day appointments={state.appointments.filter((app) => app.day === 1)} />
            </Route>
            <Route path="/">
              <Home state={state} addDentist={addDentist} addPatient={addPatient}/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};
export default App;
