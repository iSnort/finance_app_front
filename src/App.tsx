import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar />
      {/* with the Outlet component we render the search path result  ex: "/serch" */}
      <Outlet />
    </>
  )
}

export default App
