import {useParams} from 'react-router-dom'
import './itemDetailContainer.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useContext, useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '/db/firebase-config'
import {CartContext} from '../../contexts/CartContext'
import {CircularProgress} from '@mui/material'

const ItemDetailContainer = (prop) => {
	const {id} = useParams()
	const [producto, setProducto] = useState([])
	const [cantidad, setCantidad] = useState(1)
	const [loading, setLoading] = useState(false)
	const {addItem} = useContext(CartContext)

	const prodRef = collection(db, 'items')
	const getItemsById = async (id) => {
		const prodsCollecion = await getDocs(prodRef)
		const prod = prodsCollecion.docs.find((doc) => doc.id === id)
		if (prod) {
			setProducto({...prod.data(), id: prod.id})
		} else {
			setProducto(null)
		}
		setLoading(true)
	}
	useEffect(() => {
		getItemsById(id)
	}, [id])

	const handleCantidadChange = (e) => {
		setCantidad(parseInt(e.target.value))
	}

	const handleAgregarCarrito = () => {
		addItem(producto, cantidad)
	}

	if (!loading) {
		return (
			<div className='loading-container'>
				<CircularProgress size={150} />
			</div>
		)
	}

	if (loading) {
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
							value={cantidad}
							onChange={handleCantidadChange}
						/>
						<Button
							variant='contained'
							className='boton-tamaño'
							onClick={handleAgregarCarrito}
						>
							Agregar al carrito
						</Button>
					</aside>
				</div>
			</div>
		)
	}
}

export default ItemDetailContainer
