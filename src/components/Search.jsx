import React, { useState } from "react";
import { cards } from "./Body";
export const [restroList, setRestroList] = useState(cards);
const Search = () =>{
    const [searchText,setSearchText] = useState('');
    
    

    return(
        <div className="searchRestro">
            <input type="text" 
            placeholder="Search"
            value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button >Search</button>
        </div>
        
    );
}
export default Search;

