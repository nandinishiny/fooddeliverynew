import React  from "react";
import useRestro from "../utils/useRestro";

const Search = () =>{
    const [ , ,searchText,getFilterDataOnChange,getFilterDataOnClick] = useRestro();
    // const {searchText,getFilterDataOnChange,getFilterDataOnClick} = useRestro();
    return(
        <div className="searchRestro">
            <input type="text" 
            placeholder="Search"
            value={searchText} onChange={(e)=>getFilterDataOnChange(e)}/>
            <button 
            onClick={()=>getFilterDataOnClick() } >
                Search
            </button>
        </div>)
}
export default Search;

