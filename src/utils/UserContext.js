import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: null,
  setUserName: () => {},
});

export default UserContext;
