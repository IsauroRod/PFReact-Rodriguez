import {IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './cartWidget.css'
import {useContext, useState} from 'react'
import {CartContext} from '../../contexts/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {
	const {cartProds} = useContext(CartContext)

	const calcularCantidad = () => {
		let cantidad = 0
		cartProds.forEach((prod) => {
			cantidad += prod.cantidad
		})
		return cantidad
	}

	return (
		<Link className='cart-container' to={`/cart`}>
			<IconButton
				aria-label='add to shopping cart'
				color='primary'
				size='small'
			>
				<ShoppingCartIcon fontSize='large' />
			</IconButton>
			<p className='cart-amount'>{calcularCantidad()}</p>
		</Link>
	)
}

export default CartWidget
