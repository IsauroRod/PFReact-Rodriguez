import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import {CartProvider} from './contexts/CartContext'
import NotFound from './components/NotFound'
function App() {
	return (
		<CartProvider>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/category/:categoryId' element={<ItemListContainer />} />
				<Route path='/item/:id' element={<ItemDetailContainer />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</CartProvider>
	)
}

export default App
