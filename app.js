import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage/Homepage";
import ImageGenrator from "./src/pages/imageGenrator/ImageGenrator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import History from "./src/pages/History/History";
import HistoryInfoPage from "./src/pages/History/HistoryInfoPage";
import PointsContext from "./src/context/Context";
import SignUp from "./src/pages/auth/signUp/SignUp";

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
      element: (
        <Homepage
        // userPoints={userPoints} setUserPoints={setUserPoints}
        />
      ),
    },
    {
      path: "/image-genrator",
      element: (
        <ImageGenrator
        //  userPoints={userPoints} setUserPoints={setUserPoints}
        />
      ),
    },
    {
      path: "/sign-up",
      element: (
        <SignUp
        //  userPoints={userPoints} setUserPoints={setUserPoints}
        />
      ),
    },
    {
      path: "/history",
      element: (
        <History
        // userPoints={userPoints} setUserPoints={setUserPoints}
        />
      ),
    },
    {
      path: "/history/:historyId",
      element: (
        <HistoryInfoPage
        // userPoints={userPoints}
        // setUserPoints={setUserPoints}
        />
      ),
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
