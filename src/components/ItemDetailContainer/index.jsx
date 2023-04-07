import {useParams} from 'react-router-dom'
import './itemDetailContainer.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useEffect, useState} from 'react'

const ItemDetailContainer = (prop) => {
	const {id} = useParams()

	const [producto, setProducto] = useState({})
	useEffect(() => {
		fetch('/data/productos.json')
			.then((response) => response.json())
			.then((data) => setProducto(data.find((prod) => prod.id === id)))
			.catch((error) => console.log(error))
	}, [])

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
