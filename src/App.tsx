import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideMenuLayout from "./Layouts/SideMenuLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "task-list",
        element: <h1>Task List</h1>,
      },
      {
        path: "task-progress",
        element: <h1>Task Progress</h1>,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
