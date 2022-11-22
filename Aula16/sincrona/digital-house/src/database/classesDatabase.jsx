import { SeventhClassCardProduct } from "../components/SeventhClassCardProduct";
import { EighthClass } from "../lessons/EighthClass";
import { FifteenthClass } from "../lessons/FifteenthClass";
import { FifthClass } from "../lessons/FifthClass";
import { FourteenthClass } from "../lessons/FourteenthClass";
import { FourthClass } from "../lessons/FourthClass";
import { IntegratedClassThirteenth } from "../lessons/IntegratedClassThirteenth";
import { SecondClass } from "../lessons/SecondClass";
import { ThirdClass } from "../lessons/ThirdClass";
import { ThirteenthClass } from "../lessons/ThirteenthClass";
import { DHGames } from "../pages/DHGames";
import { Login } from "../pages/Login";

export const classesRouteDatabase = [
    {
        classroom: "Second Class",
        path: "second-class",
        element: <SecondClass />
    },
    {
        classroom: "Third Class",
        path: "third-class",
        element: <ThirdClass />
    },
    {
        classroom: "Fourth Class",
        path: "fourth-class",
        element: <FourthClass />
    },
    {
        classroom: "Fifth Class",
        path: "fifth-class",
        element: <FifthClass />
    },
    {
        classroom: "Sixth Class",
        path: "dh-games",
        element: <DHGames />
    },
    {
        classroom: "Seventh Class",
        path: "seventh-class",
        element: <SeventhClassCardProduct/>
    },
    {
        classroom: "Eighth Class",
        path: "eighth-class",
        element: <EighthClass />
    },
    {
        classroom: "Nineth Class",
        path: "login",
        element: <Login />
    },
    {
        classroom: "Thirteenth Class",
        path: "thirteenth-class",
        element: <ThirteenthClass />
    },
    {
        classroom: "Integrated Thirteenth Class",
        path: "integrated-class-thirteenth",
        element: <IntegratedClassThirteenth />
    },
    {
        classroom: "Fourteenth Class",
        path: "fourteenth-class",
        element: <FourteenthClass />
    },
    {
        classroom: "Fifteenth Class",
        path: "fifteenth-class",
        element: <FifteenthClass />
    }
]