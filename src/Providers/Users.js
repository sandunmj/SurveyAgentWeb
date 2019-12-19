import React, { useState } from "react";

export const UsersContext = React.createContext();

export const UsersProvider = props => {
  const usersState = useState(users);

  return (
    <ExampleContext.Provider value={usersState}>
      {props.children}
    </ExampleContext.Provider>
  );
};

const users = [
  {
    id: 757,
    employeeId: "TA234",

    email: "ekaterina.tankova@devias.io",
    phone: "304-428-3097",
    designation: "Engineer"
  }
];
