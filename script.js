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
