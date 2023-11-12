import { SyntheticEvent, useState } from 'react';
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  /* logic for search */
  const [search, setSearch] = useState<string>("");
  //Always initialize the states with something for avoid "undefined" errors
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  
  // we can also use SyntheticEvent instead of ChangeEvent or MouseEvent, this groups all the events in HTML
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    //Type Narrowing  (we validated that the response is an array)
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult)
  }
  /* end logic for search */

  /* form logic */
  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e, "urrai")
  }
  /* end form logic */


  return (
    <div className='App'>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}  />
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
      {serverError && <div>Unable to connect to API</div>}
    </div>
  )
}

export default App
