import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import LoginPage from "./page/Login";
import SignUpPage from "./page/Signup";
import UserPage from "./page/User";
import User from "./model/User";

function App() {
  User.delete("1");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user/:userId" Component={UserPage} />
        <Route path="*" element={<Container />} />
      </Routes>
    </Router>
  );
}

export default App;
