import { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../assets/maiik-logos-cropped.svg'
import { SocialICon } from "./SocialICon";

const NavItem = () => {
    const [activeLink, setactiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onscroll = () => {
            (window.scroll > 50) ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener('scroll', onscroll);
        return () => window.removeEventListener('scroll', onscroll);

    }, []);
    const onUpdateLink = (value) => {

        setactiveLink(value)

    }
    return (
        <>

            <Navbar className={scrolled ? 'scrolled' : ''} expand="lg">
                <Container >
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('About')}>About</Nav.Link>
                            <Nav.Link href="#Experience" className={activeLink === 'Experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('Experience')}>Experience</Nav.Link>
                            <Nav.Link href="#Work" className={activeLink === 'Work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('Work')}>Work</Nav.Link>
                            <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('Contact')}>Contact</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                          <SocialICon/>




                        </span>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>

    )
}

export default NavItem