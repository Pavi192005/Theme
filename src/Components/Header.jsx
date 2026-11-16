import React from 'react'

function Header({theme,change}) {
    
      
  return (
    <>
      <h1>Theme Management</h1>
      <p>{theme}</p>
      <button onClick={change} style={{height:"30px",border:"grey solid",borderRadius:"20px"}}>Change Theme</button>
    </>
  )
}

export default Header




