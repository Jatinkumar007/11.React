import React from 'react'
import Person from './Components/Person'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'

function App() {
    const list = ['jatin','nitin','manish','ravish','hitesh','sumit','rahul'];
  return (
    <div style={{margin:'0px',padding:"0px"}}>
      <Header title={'Title'}/>
      <Person name={'jatin'} age={'23'}/>
      <Button text={'Press'} onClick={()=>{alert('button Clicked')}}/>
      <List list={list}/>
    </div>
  )
}

export default App
