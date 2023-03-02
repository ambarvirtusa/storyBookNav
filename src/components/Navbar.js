import React from 'react'
import './Navbar.css'
function Navbar(props) {
  const {variant='primary',children,...rest}=props
  return (
    <div className={`nav  ${variant}`}>
      <div className='main'>
      <div >Home</div>
      <div >About</div>
      <div >Contact Us</div>

      </div>
      <div className='last'>
        <div style={{fontSize:'3em',marginRight:'30px'}}>Basic Navbar</div>

      </div>
      
      

    
    </div>
  )
}

export default Navbar