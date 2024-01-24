import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/index.";
import Register from "./pages/Register";
// import ProtectedRoutes from "./components/protectedRoutes";
import AuthorizedRoutes from "./components/AuthorizedRoutes";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";

function App() {
  const { loading } = useSelector((state) => state.loader);
  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthorizedRoutes>
                <Home />
              </AuthorizedRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthorizedRoutes>
                <Profile />
              </AuthorizedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
