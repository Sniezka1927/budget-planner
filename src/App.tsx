import React from "react";
import "./App.css";
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
import SettingsPage from "./components/Pages/SettingsPage";
function App() {
  return (
    <AuthContextProvider>
      <BudgetContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/transactions" element={<TransactionsPage />}></Route>
            <Route path="/categories" element={<CategoriesPage />}></Route>
            <Route path="/budget" element={<BudgetPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="*" element={<MissingPage />}></Route>
          </Routes>
        </Router>
      </BudgetContextProvider>
    </AuthContextProvider>
  );
}

export default App;
