import React, {useState} from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MovileIcon, Wrapper } from './NavBar.components'
import { 
  FaRedhat, 
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from 'react-icons';

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <Container>
        <Wrapper>;
          <IconContext.Provider value={{ style: { fontSize: "2em" }}}>
            
            <LogoContainer>
            <FaRedhat />
              <p>
                OlivasyCherrys
              </p>
            </LogoContainer>

              <MovileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <FaTimes /> : <FaBars /> }
              </MovileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink>
                <div>
                <FaHome />
                Home
                </div>
                </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink>
                <div>
                  <FaUserAlt />
                  Informacion
                </div>
                </MenuItemLink>
                </MenuItem>

              <MenuItem>
                <MenuItemLink>
                <div>
                  <FaBriefcase />
                  Productos
                </div>
                </MenuItemLink>
              </MenuItem>

              <MenuItem>
                <MenuItemLink>
                <div>
                  <FaGlasses />
                  Contacto
                </div>
                </MenuItemLink>
              </MenuItem>
            </Menu>
            
            </IconContext.Provider>   
        </Wrapper>
    </Container>
  )
}

export default NavBar