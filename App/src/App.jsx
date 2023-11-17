import './App.css'
import { useMode } from "./hooks/useMode"
import Header  from "./components/Header"
import { SearchIcon, ChevronDown,ChevronUp } from './components/icons/HeroIcons'
import { useEffect, useId, useState } from 'react'
import { regions } from "./data/region"
import Countries from "./mooks/data.json"
import Card from './components/Card'

function App() {
  const {dark} = useMode()
  const filterInputId = useId()
  const [dropdown, setDropdown] = useState(true)
  const dropdownOptions = useId()
  return (
    <>
      <div id='app' className={`relative min-h-screen flex flex-col ${!dark ? 'body-theme-ligth':'body-theme-dark'} `}>
        <nav>
          <Header />
        </nav>
        <main className={`[grid-area:main] flex flex-col p-6 gap-4`}>

          <div className='w-full flex flex-col md:flex-row justify-between'>
            
            <div className={`input ${!dark ? 'theme-input-ligth':'theme-input-dark'}`}>
              <label htmlFor={filterInputId} className="cursor-pointer">
                <SearchIcon />
              </label>
              <input id={filterInputId} type="text" placeholder='Search for a country...' />
            </div>


            <div className={`dropdown relative ${!dark ? 'dropdown-theme-ligth':'dropdown-theme-dark'}`}>
              <button className='flex w-full' onClick={()=>{setDropdown(prev => !prev)}}>
                Filter By Region
                {!dropdown ? <ChevronUp />:<ChevronDown />}
              </button>
              <ul id={dropdownOptions} className={
                ` dropdown-options animate-fade animate-once animate-ease-in-out
                  ${!dark ? 'dropdown-options-theme-ligth':'dropdown-options-theme-dark'}
                  ${dropdown && 'hidden'}
                `
                }>
                {regions.map((region,index) =>(
                  <li className='w-full' key={index}>
                    <a href="#">{region}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-12'>
            {Countries.map((country,index) => (
              <Card key={index} country={country} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
