import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  const sortByTime = appointments.sort((a, b) => (a.time > b.time ? 1 : -1));
  const appointmentsJSX = sortByTime.map(({ time, patient }, index) => (
    <AppointmentInMonth time={time} patient={patient} key={index} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
