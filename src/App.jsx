import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import {useState, useEffect} from 'react'
import db from '../db/firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import Checkout from './components/Checkout'

function App() {
	// const [items, setItems] = useState([])
	// const itemRef = collection(db, 'items').onSnapshot((querySnapshot) => {})
	// const getItems = async () => {
	// 	const itemsCollection = await getDocs(itemRef)
	// 	const items = setItems(
	// 		itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
	// 	)
	// 	setItems(items)
	// }

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:categoryId' element={<ItemListContainer />} />
				<Route path='/item/:id' element={<ItemDetailContainer />} />
				<Route path='/checkout' element={<Checkout />} />
			</Routes>
		</div>
	)
}

export default App
