import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import phrases from './phrases.json'

function App() {
  const randomIndex = Math.floor(Math.random() * phrases.length)
  const randomBotton = Math.floor(Math.random() * phrases.length)

  const color = ['#845EC2', '#C197FF', '#00C9A7', '#005B44', '#FACCFF', '#714DAF']
  const randomColor = Math.floor(Math.random() * color.length)
  document.body.style = ` background: ${color[randomColor]} ` ;


  console.log(phrases);

  const [index, setIndex]= useState(randomIndex);

  const changePhrase = () => {
    setIndex(randomBotton)
  }

  return (
    <div className="App">
      <div className='contenedor'>
        <h4> {phrases[index].quote} </h4>
        <h3> {phrases[index].author} </h3>
        <button onClick={changePhrase}>Change Phrase</button>
      </div>




    </div>
  )
}

export default App
