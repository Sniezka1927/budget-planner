import { useReducer } from "react";
import AuthContextType from "../Interfaces/AuthContextType";
import authProvider from "../Interfaces/AuthProvider";
import AuthContext from "./auth-context";

interface defaultState {
  isLogged: boolean;
  user: object;
}
const defaultAuthState: defaultState = {
  isLogged: false,
  user: {},
};

const authReducer = (state: any, action: any) => {
  if (action.type === "SIGN-IN") {
    return {
      isLogged: true,
      user: state.user,
    };
  } else if (action.type === "SIGN-OUT") {
    return {
      isLogged: false,
      user: state.user,
    };
  } else if (action.type === "SET-USER") {
    return {
      isLogged: state.isLogged,
      user: state.user,
    };
  }
  // if any block catched return default values to prevent errors
  return {
    isLogged: state.isLogged,
    user: state.user,
  };
};

const AuthContextProvider = (props: authProvider) => {
  const [authState, dispatchAuthAction] = useReducer(
    authReducer,
    defaultAuthState
  );

  const signInHandler = () => {
    dispatchAuthAction({
      type: "SIGN-IN",
    });
  };

  const signOutHandler = () => {
    dispatchAuthAction({
      type: "SIGN-OUT",
    });
  };

  const setUserHandler = () => {
    dispatchAuthAction({
      type: "SET-USER",
    });
  };

  const authContext: AuthContextType = {
    isLogged: authState.isLogged,
    user: authState.user,
    signIn: signInHandler,
    signOut: signOutHandler,
    setUser: setUserHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
