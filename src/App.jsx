import './App.css'
import { useGlobalContext } from './context'
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modals from './components/Modals'
import Search from './components/Search'

export default function App() {
  const {showModal,favorites} = useGlobalContext()
  
  return (  
    <main>
      <Search /> 
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modals />} 
      
    </main>
  )
}


