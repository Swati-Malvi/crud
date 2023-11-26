import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
