import React from "react";
import Layout from "./components/Layout";
import Question from "./pages/Question";
import Result from "./pages/Result";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import createGlobalstyle from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const Globalstyle = createGlobalstyle`
@font-face{
font-family: "simKyungha";
src: url("/fonts/SimKyungha.ttf");
}
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  ul,li,a{
  }
  body{
  font-family:"SimKyungha";
  }
`;
function App() {
  return (
    <>
      <Globalstyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
