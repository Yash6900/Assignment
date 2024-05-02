import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
      <nav style={{boxShadow:"none" , position:"sticky"}}>
<div className="nav-wrapper" style={{backgroundColor:"white" }}>
  <a href="#" className="brand-logo" style={{marginLeft:"20px" ,color:"black"}}>Visualize</a>
  <ul id="nav-mobile" className="left hide-on-med-and-down">
  </ul>
</div>
</nav>
      </div>
    </div>
  )
}

export default Header
