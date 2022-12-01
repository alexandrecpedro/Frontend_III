import { BlogLayout } from "../components/EighteenthClassItem/BlogLayout";
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
import { BlogHome } from "../pages/Blog/Home";
import { PostDetail } from "../pages/Blog/PostDetail";
import { Configurations } from "../pages/Configurations";
import { DHGames } from "../pages/DHGames";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ToDo } from "../pages/ToDo";

export const classesRouteDatabase = [
    {
        classroom: "Home",
        path: "",
        element: <Home />
    },
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
    },
    {
        classroom: "Eighteenth Class",
        path: 'eighteenth-class',
        element: <BlogLayout />,
        children: [
            {
                classroom: "Blog",
                path: "blog",
                element: <BlogHome />
            },
            {
                classroom: "BlogPostDetail",
                path: "post/:id",
                element: <PostDetail />
            }
        ]
    },
    {
        classroom: "Nineteenth Class",
        path: 'configurations',
        element: <Configurations />
    },
    {
        classroom: "Extra Class I",
        path: "extra-class-i",
        element: <ToDo />
    }
]