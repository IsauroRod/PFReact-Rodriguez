import {useParams} from 'react-router-dom'
import './itemDetailContainer.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const ItemDetailContainer = (prop) => {
	const {id} = useParams()
	const producto = prop.productos.find((prod) => prod.id === id)

	return (
		<div>
			<h2 className='titulo-producto'>{producto.nombre}</h2>
			<div className='contenedor-producto'>
				<div
					style={{backgroundImage: `url(${producto.foto})`}}
					className='contenedor-foto'
					alt={producto.nombre}
				></div>
				<aside>
					<p className='descripcion-estilos'>{producto.descripcionExt}</p>
					<p className='descripcion-estilos'>Precio: ${producto.precio}</p>
					<TextField
						type='number'
						id='outlined-basic'
						label='Cantidad'
						variant='outlined'
					/>
					<Button variant='contained' className='boton-tamaño'>
						Agregar al carrito
					</Button>
				</aside>
			</div>
		</div>
	)
}

export default ItemDetailContainer
