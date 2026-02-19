import { useState } from 'react'
import reactLogo from './assets/smiledog.png'
import viteLogo from '/vite.svg'
import './App.css'
import InputValueDisplay from './assets/Inputs/InputValueDisplay'

function App() {


  return (
    <>
      <div>
        <a>
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Skráningarsíða</h1>
      <h2>Vinsamlegast skráðu upplýsingarnar þínar</h2>
      <div>
        <InputValueDisplay/>
      </div>
      
      
    </>
  )
}

export default App
