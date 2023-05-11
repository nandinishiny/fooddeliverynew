import {useState,useEffect} from 'react';
const filterData = (searchText,restroList)=>{
    const filteredData =restroList.filter((restro)=>{
        return (restro.data.name.toLowerCase().includes(searchText.toLowerCase())||
    restro.data.cuisines.some(cuisine =>cuisine.toLowerCase().includes(searchText.toLowerCase())))
    });
    return filteredData;
}


const useRestro = ()=>{
    const [searchText,setSearchText] = useState('');
    const [restroList, setRestroList] = useState([]); 
    const [filterRestroList, setFilterRestroList] = useState([]);
        
    useEffect(()=>{
        getRestro();

    },[]); 
    const getRestro = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        setFilterRestroList(jsonData?.data?.cards[2]?.data?.data?.cards);
        setRestroList(jsonData?.data?.cards[2]?.data?.data?.cards);
    }
    const getFilterDataOnChange=(e)=>{
        setSearchText(e.target.value)}
    const getFilterDataOnClick = ()=>{
        const data = filterData(searchText,restroList);
        setFilterRestroList(data);
    }
    
    return [restroList,filterRestroList,searchText,getFilterDataOnChange,getFilterDataOnClick]

}
export default useRestro;