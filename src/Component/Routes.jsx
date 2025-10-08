import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path : '/',
        Component : Root,
        // errorElement : <ErrorPage/>,
        children :[
            {
                path : '/',
                Component : Home,
                loader : ()=>fetch('/AppData.json')
            },
            {
                path : 'apps',
                Component : Apps,
                loader : ()=>fetch('/AppData.json')
            },
            {
                path : 'install',
                Component : Install
            },
            {
                path : "*",
                element : <ErrorPage></ErrorPage>
            }
        ]
    }
])