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
