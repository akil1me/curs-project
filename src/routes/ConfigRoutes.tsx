import React from "react";
import { useRoutes } from "react-router-dom";
import { LayoutMenu } from "../layout";
import { Home, Reviews } from "../pages";

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
    ],
  },
];

const authRoutes = [{}];

export const ConfigRoutes: React.FC = () => {
  return useRoutes(routes);
};
