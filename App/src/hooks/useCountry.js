import { useState,useCallback,useRef } from "react"
import { Get } from "../services/countries.service"
import initialData from "../mooks/data.json"
const useCountry = ({search}) => {
    const [countries,setCountries] = useState(initialData)
    const [loading,setLoading] = useState(false)


    const prevSearch = useRef(search)

    const getCountries = useCallback( async ({search}) =>{
        try{

            if(search === prevSearch.current) return 
            prevSearch.current = search
            setLoading(true)
            const result = await Get({search});
            setCountries(result)
        }catch(e){
            console.log(e)
        }finally{
            setLoading(false)
        }
        
    },[])

    return {getCountries,countries, loading}
}

export default useCountry