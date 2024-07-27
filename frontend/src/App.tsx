import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if(result !== undefined &&Array.isArray(result.data)) {
      setSearchResult(result.data);
    } else {
      // Handle unexpected return type
      // This is a followup issue due to isAxiosError not working.
      console.log("Unexpected return type from searchCompanies: ", result);
    }
    console.log(searchResult)
  };

  return (
    <div className="App">
      <Search onClick={onClick} handleChange={handleChange} search={search} />
      <CardList />
    </div>
  );
}

export default App;
