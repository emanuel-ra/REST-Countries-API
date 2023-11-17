import { useMode } from "../hooks/useMode"
import { MoonIcon, SunIcon } from "./icons/HeroIcons"


function Header() {
  const {dark,setDark} = useMode()

  const handleMode = () =>{
    setDark(prev => !prev)
  }

  
  return (
    <>
    <div className={`header [grid-area:aside] ${!dark ? 'header-theme-ligth':'header-theme-dark'}`}>
        <h1 className="lg:text-xl font-semibold">Where in the world?</h1>
    
        <a className="flex gap-2 justify-center text-center font-semibold lg:text-base transition-all ease-in-out" href="#" onClick={handleMode}>
            {dark ?<SunIcon />:<MoonIcon />}
            {dark ?`Light Mode`:`Dark Mode`}            
        </a>       
    </div>
    </>
  )
}

export default Header