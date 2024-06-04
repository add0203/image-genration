import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage/Homepage";
import ImageGenrator from "./src/pages/imageGenrator/ImageGenrator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import History from "./src/pages/History/History";
import HistoryInfoPage from "./src/pages/History/HistoryInfoPage";
import PointsContext from "./src/context/Context";
import SignUp from "./src/pages/auth/signUp/SignUp";
import LogIn from "./src/pages/auth/logIn/LogIn";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const Heading = <h1>Hello React</h1>;

const App = () => {
  const [userPoints, setUserPoints] = useState(5);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/image-genrator",
      element: <ImageGenrator />,
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
      element: <History />,
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
      }}
    >
      <RouterProvider router={router} />
    </PointsContext.Provider>
  );
};

root.render(<App />);
