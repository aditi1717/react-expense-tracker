import { useState } from "react"

export function useFilter(dataList,useCallback){
    const [query,setQuery]=useState("");
    const filteredData=dataList.filter((data)=>{
           return useCallback(data).toLowerCase().includes(query)
    })
    // data.category.toLowerCase().includes(query);
    return [filteredData,setQuery];

}