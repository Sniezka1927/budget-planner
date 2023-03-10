import { createContext } from "react";
import AuthContextType from "../Interfaces/AuthContextType";
// import BudgetContextType from "../Interfaces/budgetContextType";

const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  user: {},
  signIn: () => {},
  signOut: () => {},
  setUser: () => {},
});

export default AuthContext;
