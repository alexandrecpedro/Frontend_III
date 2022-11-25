import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { classesRouteDatabase } from "./database/classesDatabase";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout lateralMenu={classesRouteDatabase} />,
      children: classesRouteDatabase
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
