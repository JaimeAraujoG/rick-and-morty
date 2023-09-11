import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'


function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))  
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()

  }, [inputValue])
  
  const inputSearch = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }


  return (
    <div>
      <img className='img__header' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fae7c413-69cc-45f8-b3b7-da8422ebd43f/dfpd0j0-83f1a1db-89a2-4e83-a5b4-c75c82273696.jpg/v1/fill/w_1280,h_427,q_75,strp/twitter_header__rick_an_morty__theme_by_mezzydzn_dfpd0j0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvZmFlN2M0MTMtNjljYy00NWY4LWIzYjctZGE4NDIyZWJkNDNmXC9kZnBkMGowLTgzZjFhMWRiLTg5YTItNGU4My1hNWI0LWM3NWM4MjI3MzY5Ni5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.l1fUN4CfD8sRq-UR93nQt2d_d8wRHlf8kQ_Uj_ctp4g" alt="" />
      <form className='from__header' onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      {
        hasError
        ?<h2>Hey! You must provide and id from 1 to 126 </h2>
        : (
        <>
      <LocationInfo 
        location={location}
      />       
      <div className='div__header'>
        {
          location?.residents.map(url => (
            <ResidentCard 
              key={url}
              url={url}
            />
          ))
        }
      </div>        
      </>
      )
      }
    </div>
  )
}

export default App
