import { useRef, useState } from 'react'
import './App.css'
import { Content } from '../src/components/JSON/Content'
import { Box } from './components/Box/Box'
let counter = 0


function App() {

  const myReference = useRef('')

  const [work, setWork] = useState(Content)

  const handleSetTasks = ()=>{
    counter++
    let newWork = {
      _id: counter,
      content: myReference.current.value,
    }
    setWork({...Content,newWork})
  }

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
