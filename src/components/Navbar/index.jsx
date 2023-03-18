import {Button, ButtonGroup} from '@mui/material'
import CartWidget from '../CartWidget'
import logo from '../../assets/logo.png'
import './navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className='container'>
			<Link to='/' className='link'>
				<a href=''>
					<img src={logo} alt='' className='logo' />
				</a>
			</Link>
			<ButtonGroup
				variant='outlined'
				aria-label='outlined button group'
				color='primary'
				className='grupo-pags'
			>
				<Link to='/' className='link'>
					<Button>INICIO</Button>
				</Link>
				<Link to='/' className='link'>
					<Button>NOSOTROS</Button>
				</Link>
				<Link to='/' className='link'>
					<Button>CONTACTO</Button>
				</Link>
				<Link to='/' className='link'>
					<Button>COMPRAR</Button>
				</Link>
			</ButtonGroup>
			<CartWidget />
		</nav>
	)
}

export default Navbar
