import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import AccountsList from "./AccountsList";

// This is fake account data.
// It mimics data that might be loaded from e.g. a server or database.
const fakeAccounts = [
  {
    id: 1,
    name: "One",
    email: "fake.email@example.com",
    password: "totally fake"
  },
  {
    id: 2,
    name: "Two",
    email: "fake.email@example.com",
    password: "also fake"
  },
  {
    id: 3,
    name: "Three",
    email: "also.fake.email@example.com",
    password: "definitely fake"
  }
];

render(
  <AccountsList accounts={fakeAccounts} />,
  document.getElementById("root")
);
