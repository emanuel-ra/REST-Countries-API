import { API } from "../constans/api";
import { REGIONS } from "../constans/region";

export const  Get = async({search}) =>{

    try{
        let endPoint = ''
        if(search)
            endPoint += `name/${search}?fullText=true`

        if(!REGIONS.every(region => region.localeCompare(search)))
            endPoint = `region/${search}`

        const response = await fetch(`${API}/${endPoint}`);
        const result = await response.json()
        //console.log(result.map(e => e.capital));

        return result?.map( country => ({
            name: country.name.official ,
            population: country.population ,
            region: country.region ,
            capital: country.region !== "Asia" ? country.capital[0]:'' ,            
            flags: country.flags
        }))
    }catch(e){        
        throw new Error(e)
    }
}