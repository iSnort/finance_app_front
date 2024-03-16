import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/SearchPage/HomePage/HomePage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
    {
        //we define the default path for our appliciation
        path: "/",
        element: <App />,
        //In here we declare all the routes of our application
        children: [
            {path: "", element: <HomePage />},
            {path: "search", element: <SearchPage />},
            {path: "company/:ticker", element: <CompanyPage />}
        ],
    },
]);