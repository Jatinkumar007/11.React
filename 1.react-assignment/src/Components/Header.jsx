import React from 'react'

const Header = (props) => {
  return (
    <div style={{border:'2px solid black',padding:'0px',margin:'0px'}}>
      <h1 style={{textAlign:'center'}}>{props.title}</h1>
    </div>
  )
}

export default Header
