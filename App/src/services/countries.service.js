import { API } from "../constans/api";
import { REGIONS } from "../constans/region";

export const  Get = async({search}) =>{

    try{
        let endPoint = ''
        if(search)
            endPoint += `name/${search}`

        if(!REGIONS.every(region => region.localeCompare(search)))
            endPoint = `region/${search}`

        const response = await fetch(`${API}/${endPoint}`);
        const result = await response.json()
        return result?.map( country => ({
            name: country.name.official ,
            population: country.population ,
            region: country.region ,
            capital: country.region !== "Asia" ? country.capital[0]:'' ,            
            flags: country.flags ,
            subregion : country.subregion ,
            topLevelDomain : country.tld ,
            languages : country.languages ,
            currencies : country.currencies ,
            borders : country.borders ,
        }))
    }catch(e){        
        throw new Error(e)
    }
}

export const  GetCounty = async({name}) =>{

    try{
        let endPoint = `name/${name}?fullText=true`

        const response = await fetch(`${API}/${endPoint}`);
        return await response.json()
    }catch(e){        
        throw new Error(e)
    }
}