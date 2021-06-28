import React from "react";
import "./App.css";

const Home = (props) => {

  return (
    <>
      <div>Home!</div>
      <button
        onClick={() =>
          props.addDentist(
            "Toos",
            "Trekker",
            "06-12345678",
            "toos@tandartspraktijkbvt.nl"
          )
        }
      >
        Add dentist
      </button>
      <button
        onClick={() =>
          props.addPatient(
            "Piet",
            "Auw",
            "06-12345679",
            "piet@wincacademy.nl",
            1985
          )
        }
      >
        Add patient
      </button>
    </>
  );

}

export default Home;
