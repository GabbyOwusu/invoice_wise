import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import VerifyEmail from "./pages/authentication/VerifyEmail";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication">
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="verify-email" element={<VerifyEmail />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
