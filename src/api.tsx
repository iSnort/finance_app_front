import axios from "axios"
import type { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

const API_KEY = "y7QvqdRXoEJVJ9F8tEvqCow52unUdrLm"

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occured."
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try{
        const data = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${API_KEY}`);
        
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getKeyMetrics = async (query: string) => {
    try{
        const data = await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${API_KEY}`);
        
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}