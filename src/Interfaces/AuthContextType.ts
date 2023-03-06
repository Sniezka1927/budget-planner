interface AuthContextType {
  isLogged: boolean;
  user: Object;
  signIn: () => void;
  signOut: () => void;
  setUser: () => void;
}

export default AuthContextType;
