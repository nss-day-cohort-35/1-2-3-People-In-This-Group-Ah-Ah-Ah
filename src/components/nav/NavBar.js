import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavBar.css"

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <>
            <div>
              <Navbar className="Nav-Bar" light expand="md">
                <NavbarBrand href="/Home"><img src={require("./OverProject.png")}/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="nav-link text-warning" href="/articles">News</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link text-warning" href="/events">Events</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link text-warning" href="/tasks">Tasks</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link text-warning" href="/friends">Friends</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link text-warning" href="/messages">Messages</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            </>
        )
    }


export default NavBar