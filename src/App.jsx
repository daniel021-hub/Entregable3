import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  const [location, setLocation] = useState()

  const getDataDimension = (idDimension) => {
    if(idDimension){
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
      axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => {
          alert("Not found this dimension")
        })
    }else{
      alert("Ingrese un valor")
    }
  }

  useEffect(() => {
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    const dimensionSearch = event.target.searchValue.value
    getDataDimension(dimensionSearch)
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='searchValue' type="text" placeholder='search your dimension' />
        <button type='submit'>Search</button>
      </form>
      <LocationInfo location={location} />
      <ResidentList location={location} />
    </div>
  )
}

export default App
