import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../comp/imgs/circle.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from "react";
// import navIcon1 from '../comp/imgs/home.png';
import navIcon2 from '../comp/imgs/pencil.png';
import navIcon3 from '../comp/imgs/coding.png';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50)
                {
                    setScrolled(true);
                }
                else{
                    setScrolled(false);
                }
        }

        window.addEventListener("scroll", onScroll);

        

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    const scrollTo = (id) => {
      const offset = 125; // 
      const element = document.getElementById(id);
      const y = element.offsetTop;
      window.scroll({
        top: y - offset,
        behavior: "smooth"
      });
    }
  return (
    // className="bg-body-tertiary" 
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#project" className = {activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => scrollTo("projectTitleBox")}>Projects</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => scrollTo("skillsTitleBox")}>Skills</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                {/* <a href=""> <img src={navIcon1} alt ="" /></a> */}
                <a href="mailto:jaydenmgarcia@gmail.com"> <img src={navIcon2} alt ="" /></a>
                <a href="https://github.com/Jayden4128"> <img src={navIcon3} alt ="" /></a>
            </div>
           <button className="vvd" onClick ={() => {window.location = "https://www.linkedin.com/in/jayden-garcia-44275b30a/"}}><span href="">Connect With Me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
