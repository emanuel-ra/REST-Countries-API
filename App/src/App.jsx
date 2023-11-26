import Router from "./components/Router"
import { useMode } from "./hooks/useMode"

function App() {
  const {dark} = useMode()
  return (
    <>
      <div className={`wrapper ${dark && 'bg-theme-very-dark'} `}>
        <Router />
      </div>
      
    </>
  )
}

export default App
