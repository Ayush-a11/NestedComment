import { useState } from 'react'

import './App.css'
import NestedComment from './components/NestedComment'
import { data } from './Utils/data'
import AddComment from './components/AddComment'

function App() {

  return (
    <>
    <AddComment/>
      {data.map((item)=>(
      <NestedComment data={item}/>
    )
    )}
      </>
  )
}

export default App
