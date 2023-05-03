import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { LayoutMenu } from "../layout";
import { Home, Login, Register, UserReviews } from "../pages";
import { useSelector } from "react-redux";
import { RootState } from "../store";

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
        element: <UserReviews />,
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
];

export const ConfigRoutes: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return useRoutes([...routes, ...(!user ? authRoutes : [])]);
};
