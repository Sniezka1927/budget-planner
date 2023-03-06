import React, { useContext } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import TransactionsPage from "./components/Pages/TransactionsPage";
import CategoriesPage from "./components/Pages/CategoriesPage";
import BudgetPage from "./components/Pages/BudgetPage";
import BudgetContextProvider from "./context/BudgetContextProvider";
import MissingPage from "./components/Pages/MissingPage";
import LoginPage from "./components/Pages/LoginPage";
import AuthContextProvider from "./context/AuthProvider";
import AuthContext from "./context/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLogged);
  return (
    <AuthContextProvider>
      <BudgetContextProvider>
        <Router>
          {authCtx.isLogged ? <Navigation /> : null}
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/transactions" element={<TransactionsPage />}></Route>
            <Route path="/categories" element={<CategoriesPage />}></Route>
            <Route path="/budget" element={<BudgetPage />}></Route>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="*" element={<MissingPage />}></Route>
          </Routes>
        </Router>
      </BudgetContextProvider>
    </AuthContextProvider>
  );
}

export default App;
