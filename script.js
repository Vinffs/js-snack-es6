"use strict";
// SNACK 1

const invitedVip = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const toPrint = invitedVip.map((name, index) => ({
  tableName: "VIP Table",
  guestName: name,
  place: index + 1,
}));

console.log(toPrint);

// SNACK 2

const students = [
  {
    id: "213",
    fullName: "Marco della Rovere",
    grade: "78",
  },
  {
    id: "110",
    fullName: "Paola Cortellessa",
    grade: "96",
  },
  {
    id: "250",
    fullName: "Andrea Mantegna",
    grade: "48",
  },
  {
    id: "145",
    fullName: "Gaia Borromini",
    grade: "74",
  },
  {
    id: "196",
    fullName: "Luigi Grimaldello",
    grade: "68",
  },
  {
    id: "102",
    fullName: "Piero della Francesca",
    grade: "50",
  },
  {
    id: "120",
    fullName: "Francesca da Polenta",
    grade: "84",
  },
];

const studentNames = students.map((student) => student.fullName.toUpperCase());

const overSeventy = students.filter((student) => student.grade > 70);

const thirdList = students.filter(
  (student) => student.grade > 70 && student.id > 120
);

console.log(students, studentNames);
console.log(overSeventy, thirdList);

// SNACK 3

const bicycles = [
  {
    name: "Giant",
    weight: "6",
  },
  {
    name: "Bianchi",
    weight: "8",
  },
  {
    name: "Pinnarello",
    weight: "7",
  },
  {
    name: "Trek",
    weight: "10",
  },
];
