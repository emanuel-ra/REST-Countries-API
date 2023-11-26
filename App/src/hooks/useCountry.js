import { useState,useCallback,useRef } from "react"
import { Get } from "../services/countries.service"
import initialData from "../mooks/data.json"
const useCountry = ({search}) => {
    const [countries,setCountries] = useState(initialData)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    

    const prevSearch = useRef(search)

    const getCountries = useCallback( async ({search}) =>{
        try{

            if(search === prevSearch.current) return 
            prevSearch.current = search
            setLoading(true)
            const result = await Get({search});
            setCountries(result)
        }catch(e){
            // If the service is down or something went wrong filter the mook data to show some countries
            // * the mook data structure could be different of the api request and some value didn't show
            const data = initialData.filter( element => element.name.toLowerCase().trim().includes(search.toLowerCase().trim()) )
            setError(true)
            setCountries(data)            
        }finally{
            setLoading(false)
        }
        
    },[])

    return {getCountries,countries, loading,error}
}

export default useCountry