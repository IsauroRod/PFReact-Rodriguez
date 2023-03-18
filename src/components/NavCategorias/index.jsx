import {Button, ButtonGroup} from '@mui/material'
import './navCategorias.css'
import {Link} from 'react-router-dom'

const NavCategorias = () => {
	return (
		<div className='contenedor-categorias'>
			<ButtonGroup>
				<Link to='/' className='link'>
					<Button variant='text' className='boton-categoria'>
						TODO
					</Button>
				</Link>
				<Link to='/category/so' className='link'>
					<Button variant='text' className='boton-categoria'>
						SISTEMA OPERATIVO
					</Button>
				</Link>
				<Link to='/category/audio' className='link'>
					<Button variant='text' className='boton-categoria'>
						EDICION DE AUDIO
					</Button>
				</Link>
				<Link to='/category/juegos' className='link'>
					<Button variant='text' className='boton-categoria'>
						JUEGO
					</Button>
				</Link>
			</ButtonGroup>
		</div>
	)
}

export default NavCategorias
