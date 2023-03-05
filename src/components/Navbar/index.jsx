import { Button, ButtonGroup } from '@mui/material'
import CartWidget from '../CartWidget'
import React from 'react'
import logo from "../../assets/logo.png"
import "./navbar.css"

export const Navbar = () => {
  return <nav className='container'>

        <a href=""><img src={logo} alt="" className='logo'/></a>

        <ButtonGroup variant="outlined" aria-label="outlined button group" color='primary' className="grupo-pags">
            <Button>INICIO</Button>
            <Button>NOSOTROS</Button>
            <Button>CONTACTO</Button>
            <Button>COMPRAR</Button>
        </ButtonGroup>
        <CartWidget />
    </nav>
}

export default Navbar