import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
	const [cartProds, setCartProds] = useState([])

	const addItem = (producto, cantidad) => {
		const prodId = cartProds.findIndex((prod) => prod.id === producto.id)

		if (prodId !== -1) {
			const newCartProds = [...cartProds]
			newCartProds[prodId].cantidad += cantidad

			if (newCartProds[prodId].cantidad <= 0) {
				removeItem(producto.id)
			} else {
				setCartProds(newCartProds)
			}
		} else if (cantidad > 0) {
			setCartProds([...cartProds, {...producto, cantidad: cantidad}])
		}
	}

	const actualizarCantidad = (producto, cantidad) => {
		const prodId = cartProds.findIndex((prod) => prod.id === producto.id)

		if (prodId !== -1) {
			const newCartProds = [...cartProds]
			newCartProds[prodId].cantidad = cantidad

			if (newCartProds[prodId].cantidad <= 0) {
				removeItem(producto.id)
			} else {
				setCartProds(newCartProds)
			}
		}
	}

	const removeItem = (productId) => {
		setCartProds((prevCartProds) =>
			prevCartProds.filter((prod) => prod.id !== productId)
		)
	}

	const calcularTotal = () => {
		return cartProds.reduce((total, prod) => {
			return total + prod.precio * prod.cantidad
		}, 0)
	}

	const clear = () => {
		setCartProds([])
	}

	return (
		<CartContext.Provider
			value={{
				cartProds,
				addItem,
				removeItem,
				clear,
				calcularTotal,
				actualizarCantidad,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export {CartProvider, CartContext}
