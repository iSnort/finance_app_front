import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/SearchPage/HomePage/HomePage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesingPage from "../pages/DesignPage/DesingPage";

export const router = createBrowserRouter([
    {
        //we define the default path for our appliciation
        path: "/",
        element: <App />,
        //In here we declare all the routes of our application
        children: [
            {path: "", element: <HomePage />},
            {path: "search", element: <SearchPage />},
            {path: "design-guide", element: <DesingPage />},
            {
                path: "company/:ticker", element: <CompanyPage />,
                children: [
                    {path: "company-profile", element: <CompanyProfile />},
                    {path: "income-statement", element: <IncomeStatement />},
                ]
            },
        ],
    },
]);