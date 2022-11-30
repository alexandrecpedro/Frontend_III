import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { classesRouteDatabase } from "./database/classesDatabase";
import { LanguageProvider } from "./hooks/useLanguage";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout lateralMenu={classesRouteDatabase} />,
      children: classesRouteDatabase,
    },
  ]);

  return (
    // <RouterProvider router={appRouter} />
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={appRouter} />
      </LanguageProvider>
    </ThemeProvider>
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
