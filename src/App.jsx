import { useState } from 'react'

import './App.css'
import NestedComment from './components/NestedComment'
import { data } from './Utils/data'
import AddComment from './components/AddComment'

function App() {
  const [localData,setLocalData] =useState(data);
  return (
    <>
    <AddComment data={localData} setData={setLocalData}/>
      {localData.map((item)=>(
      <NestedComment data={item} setData={setLocalData}/>
    )
    )}
      </>
  )
}

export default App
