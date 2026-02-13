import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/footer_icon.png'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const menuOpenRef = useRef();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (menuOpenRef.current) {
        menuOpenRef.current.classList.add('hide-on-scroll');
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        if (menuOpenRef.current) {
          menuOpenRef.current.classList.remove('hide-on-scroll');
        }
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);


  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img ref={menuOpenRef} src={menu_open} alt="Menu Open" className='nav-mob-open' onClick={openMenu} />
      <ul className="nav-menu" ref={menuRef}>
        <img src={menu_close} alt="Menu Close" className="nav-mob-close" onClick={closeMenu} />
        <li><a className='anchor-link' onClick={() => {setMenu("home"); scrollToSection('home'); setTimeout(closeMenu, 100);}}><p>Home</p></a>{menu=== "home" ? <img src={underline} alt="Underline" className="nav-underline" />: <></>}</li>
        <li><a className='anchor-link' onClick={() => {setMenu("about"); scrollToSection('about'); setTimeout(closeMenu, 100);}}><p>About Me</p></a>{menu=== "about" ? <img src={underline} alt="Underline" className="nav-underline" />: <></>}</li>
        <li><a className='anchor-link' onClick={() => {setMenu("projects"); scrollToSection('projects'); setTimeout(closeMenu, 100);}}><p>Projects</p></a>{menu=== "projects" ? <img src={underline} alt="Underline" className="nav-underline" />: <></>}</li>
        <li><a className='anchor-link' onClick={() => {setMenu("contact"); scrollToSection('contact'); setTimeout(closeMenu, 100);}}><p>Contact</p></a>{menu=== "contact" ? <img src={underline} alt="Underline" className="nav-underline" />: <></>}</li>
      </ul>
      <div className="nav-connect"><a className='anchor-link' onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Connect With Me</a></div>
    </div>
  )
}

export default Navbar
