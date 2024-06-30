import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { PrivateRoutes } from "./components/privateRoutes";
import { LoginPage } from "./pages/loginPage";
import { SignupPage } from "./pages/signupPage";
import { TransactionPage } from "./pages/transactionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/transactions"
          element={
            <PrivateRoutes>
              <TransactionPage />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
