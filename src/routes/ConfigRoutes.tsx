import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { LayoutMenu } from "../layout";
import { Home, Login, Register, Reviews } from "../pages";

type Children = {
  path: string;
  element: React.ReactElement;
};

type RoutesType = {
  path: string;
  element: React.ReactElement;
  children?: Children[];
};

const routes: RoutesType[] = [
  {
    path: "/",
    element: <LayoutMenu />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "*",
        element: <Navigate to="" />,
      },
    ],
  },
];

const authRoutes: RoutesType[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Navigate to="login" />,
  },
];

export const ConfigRoutes: React.FC = () => {
  return useRoutes(authRoutes);
};
