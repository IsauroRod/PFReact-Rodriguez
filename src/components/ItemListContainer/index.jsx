import './itemListContainer.css'
import {useParams} from 'react-router-dom'
import Producto from '../Producto'
import {useState, useEffect} from 'react'
import NavCategorias from '../NavCategorias'
import {db} from '/db/firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import CircularProgress from '@mui/material/CircularProgress'

const ItemListContainer = () => {
	const {categoryId} = useParams()
	const [productos, setProductos] = useState([])

	const [loading, setLoading] = useState(false)

	const prodRef = collection(db, 'items')
	const getItemsByCategory = async (idPar) => {
		const prodsCollecion = await getDocs(prodRef)
		const prodsFilter =
			categoryId == undefined
				? prodsCollecion.docs
				: prodsCollecion.docs.filter((doc) => doc.data().categoria === idPar)
		const prods = prodsFilter.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}))
		setProductos(prods)
		setLoading(true)
	}

	useEffect(() => {
		getItemsByCategory(categoryId)
	}, [categoryId])

	if (!loading) {
		return (
			<div className='loading-container'>
				<CircularProgress size={150} />
			</div>
		)
	}

	if (loading) {
		return (
			<div className='contenedor-compra'>
				<h1>COMPRA LAS KEY QUE NECESITES</h1>
				<NavCategorias />
				<div className='contenedor-itemlist'>
					{productos.map((prod) => {
						return <Producto key={prod.id} producto={prod} />
					})}
				</div>
			</div>
		)
	}
}

export default ItemListContainer
