import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { classesRouteDatabase } from "./database/classesDatabase";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: classesRouteDatabase.map(classroom => ({
        path: classroom.path,
        element: classroom.element
      }))
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
    // <>
    //   {/* <Login /> */}
    //   {/* <SecondClass /> */}
    //   {/* <ThirdClass /> */}
    //   {/* <FourthClass /> */}
    //   {/* <FifthClass /> */}
    //   {/* <DHGames /> */}
    //   {/* <DH_Games /> */}
    //   {/* <EighthClass /> */}
    //   {/* <ThirteenthClass /> */}
    //   {/* <IntegratedClassThirteenth /> */}
    //   {/* <FourteenthClass /> */}
    //   <FifteenthClass />
    // </>
  );
}

export default App;
