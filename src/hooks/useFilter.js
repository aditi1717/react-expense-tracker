import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage";

export function useFilter(dataList,useCallback){
    const [query,setQuery]=useLocalStorage('query',"");
    const filteredData=dataList.filter((data)=>{
           return useCallback(data).toLowerCase().includes(query)
    })
    // data.category.toLowerCase().includes(query);
    return [filteredData,setQuery];

}