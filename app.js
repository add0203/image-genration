import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage/Homepage";
import ImageGenrator from "./src/pages/imageGenrator/ImageGenrator";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import History from "./src/pages/History/History";
import HistoryInfoPage from "./src/pages/History/HistoryInfoPage";
import PointsContext from "./src/context/Context";
import SignUp from "./src/pages/auth/signUp/SignUp";
import LogIn from "./src/pages/auth/logIn/LogIn";
import Payment from "./src/pages/payment/payment";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const Heading = <h1>Hello React</h1>;

const App = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [userPoints, setUserPoints] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem("authorization")) {
      return true;
    } else {
      return false;
    }
  });

  const ConditionalComponent = ({ isLoggedIn, userPoints }) => {
    if (!isLoggedIn) {
      return <Navigate to="/log-in" />;
    }

    if (userPoints === 0) {
      return <Payment />;
    }

    return <ImageGenrator />;
  };

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem("authorization");
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
      // element: ConditionalComponent,
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
    {
      path: "/payment",
      element: userPoints === 0 ? <Payment /> : <Navigate to="/payment" />,
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
      }}
    >
      <RouterProvider router={router} />
    </PointsContext.Provider>
  );
};

root.render(<App />);
