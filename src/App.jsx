import { useRef, useState } from 'react'
import './App.css'
import { Content } from '../src/components/JSON/Content'
import { Box } from './components/Box/Box'
let counter = 0


function App() {


  return (
    <>
    <input ref={myReference} type="text" content='hola' />
    <button onClick={handleSetTasks}>ACA</button>

    <hr />

    <div className='works'>

    </div >
    

      {
       Content.map(cont => (
          <Box
          _id={cont._id}
          work={cont.content}
            
            
          />
        ))
      }
    </>
  )
}

export default App
