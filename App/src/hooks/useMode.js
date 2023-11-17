import { useContext } from "react";
import { ModeContext }  from "../context/ModeContext"
export function useMode(){
    const {dark, setDark} = useContext(ModeContext)
    return {dark,setDark}

}