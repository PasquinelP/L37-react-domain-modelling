import {patients, dentists, assistants} from './Data';

console.log(patients);
console.log(dentists);
console.log(assistants);

const getRandomPatient = () => {
  const person = patients[Math.floor(Math.random() * 50)];
  return `${person.first_name} ${person.last_name}`;
};

const getRandomDentist = () => {
  const person = dentists[Math.floor(Math.random() * 4)];
  return `${person.first_name} ${person.last_name}`;
};

const getRandomAssistant = () => {
  const person = assistants[Math.floor(Math.random() * 2)];
  return `${person.first_name} ${person.last_name}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const getRandomID = () => Math.floor(Math.random() * 1000000) + 1;

const generateRandomAppointment = () => ({
  id: getRandomID(),
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomPatient(),
  dentist: getRandomDentist(),
  assistant: getRandomAssistant(),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
