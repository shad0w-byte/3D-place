import React   from 'react'

import {Navbar,Nav} from 'react-bootstrap'


import {NavbarStyle,BarStyle,Icon} from './style'

export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg">
            <Icon>
            <Navbar.Brand href="/">
              <i className="bi bi-badge-3d-fill" id="home-icon"></i>
            </Navbar.Brand>
            </Icon>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button" onClick={changeNavbarIcon}>
              <BarStyle>
                <i className="bi bi-list icon"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="https://github.com/victor-kiss" rel="noreferrer" >Creator</Nav.Link>
                <Nav.Link href="/https://github.com/victor-kiss/project-name" rel="noreferrer">Source Code</Nav.Link>
                <Nav.Link href="/design-assets" rel="noreferrer">Design Assets</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        </Navbar>
        </NavbarStyle>
    </>
    )
}

function changeNavbarIcon() {
    let iconButton = document.querySelector(".icon")

   if(iconButton.classList.contains("bi-list")){
        iconButton.classList.remove("bi-list")
        iconButton.classList.add("bi-x")
   }else{
    iconButton.classList.add("bi-list")
    iconButton.classList.remove("bi-x")
   }
}