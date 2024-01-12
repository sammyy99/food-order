import { Menu_API } from "./cdn"
import { useState , useEffect } from "react"

const useMenuDataFetch = (resId)=>{

    const [resInfo,setResInfo] = useState(null)
    useEffect(()=>{fetchMenu()},[])

const fetchMenu = async ()=>{
    const result = await fetch (Menu_API+resId)
    const json = await result.json()
    
    setResInfo(json.data)
}
    return resInfo;
}

export default useMenuDataFetch;