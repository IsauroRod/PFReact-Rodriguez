import './itemListContainer.css'
import {useParams} from 'react-router-dom'
import Producto from '../Producto'
import {useState, useEffect} from 'react'
import NavCategorias from '../NavCategorias'

const ItemListContainer = () => {
	const [productos, setProductos] = useState([])
	useEffect(() => {
		fetch('/data/productos.json')
			.then((response) => response.json())
			.then((data) => setProductos(data))
			.catch((error) => console.log(error))
	}, [])
	const {categoryId} = useParams()
	const filtrado =
		categoryId != undefined
			? productos.filter((prod) => prod.categoria === categoryId)
			: productos
	return (
		<div className='contenedor-compra'>
			<h1>COMPRA LAS KEY QUE NECESITES</h1>
			<NavCategorias />
			<div className='contenedor-itemlist'>
				{filtrado.map((prod) => {
					return <Producto key={prod.id} producto={prod} />
				})}
			</div>
		</div>
	)
}

export default ItemListContainer
