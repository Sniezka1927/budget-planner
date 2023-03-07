interface AuthContextType {
  isLogged: boolean;
  user: object;
  signIn: () => void;
  signOut: () => void;
  setUser: () => void;
}

export default AuthContextType;
