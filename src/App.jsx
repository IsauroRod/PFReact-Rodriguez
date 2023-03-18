import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import {useState, useEffect} from 'react'

function App() {
	const [productos, setProductos] = useState([])
	useEffect(() => {
		fetch('/data/productos.json')
			.then((response) => response.json())
			.then((data) => setProductos(data))
			.catch((error) => console.log(error))
	}, [])
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:categoryId' element={<ItemListContainer />} />
				<Route
					path='/item/:id'
					element={<ItemDetailContainer productos={productos} />}
				/>
			</Routes>
		</div>
	)
}

export default App
