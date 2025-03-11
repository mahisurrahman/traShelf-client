import { Route, Routes } from "react-router";
import "./App.css";
import SignupPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserLayout from "./layouts/userLayout/UserLayout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<UserLayout/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
