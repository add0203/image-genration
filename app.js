import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage/Homepage";
import ImageGenrator from "./src/pages/imageGenrator/ImageGenrator";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Link,
} from "react-router-dom";
import History from "./src/pages/History/History";
import HistoryInfoPage from "./src/pages/History/HistoryInfoPage";
import PointsContext from "./src/context/Context";
import SignUp from "./src/pages/auth/signUp/SignUp";
import LogIn from "./src/pages/auth/logIn/LogIn";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
// const navigate = useNavigate();

// const Heading = <h1>Hello React</h1>;

const App = () => {
  // const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();
  const [userPoints, setUserPoints] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem("authorization")) {
      return true;
    } else {
      return false;
    }
  });

  const login = () => {
    setIsLoggedIn(true);
    // navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("authorization");
    setLoggedInUser("");

    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/image-genrator",
      element: isLoggedIn ? <ImageGenrator /> : <Navigate to="/log-in" />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/log-in",
      element: <LogIn />,
    },
    {
      path: "/history",
      element: isLoggedIn ? <History /> : <Navigate to="/log-in" />,
      // element: <History />,
    },
    {
      path: "/history/:historyId",
      element: <HistoryInfoPage />,
    },
  ]);

  return (
    <PointsContext.Provider
      value={{
        userPoints: userPoints,
        setUserPoints: setUserPoints,
        isLoggedIn: isLoggedIn,
        login,
        logout,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      <RouterProvider router={router} />
    </PointsContext.Provider>
  );
};

root.render(<App />);
