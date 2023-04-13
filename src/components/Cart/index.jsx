import {useContext} from 'react'
import ProductoCart from '../ProductoCart'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext'
import './Cart.css'

function Cart() {
	const {cartProds, calcularTotal} = useContext(CartContext)

	if (cartProds.length === 0) {
		return (
			<h2 className='estilo-checkout'>
				Por favor, agregue productos al carrito.
			</h2>
		)
	}
	return (
		<div>
			<div
				className='cartContainer'
				style={{
					display: `grid`,
					gridTemplateRows: `120px, repeat(${cartProds.length}, 150px)`,
					gridTemplateColumns: `repeat(5, 20vw)`,
					placeItems: `center`,
					overflow: `hidden`,
					rowGap: `10px`,
				}}
			>
				<span></span>
				<span className='estilos-encabezado'>Nombre</span>
				<span className='estilos-encabezado'>Precio</span>
				<span className='estilos-encabezado'>Cantidad</span>
				<span className='estilos-encabezado'>Total x Producto</span>
				{cartProds.map((prod) => {
					return <ProductoCart key={prod.id} producto={prod} />
				})}

				<span className='total-carrito'>
					<span className='total-carrito-text'>Total:</span>
					<span className='total-carrito-amount'>${calcularTotal()}</span>
				</span>
			</div>
			<Link to='/checkout' className='link'>
				<Button variant='contained' className='boton-checkout'>
					checkout
				</Button>
			</Link>
		</div>
	)
}

export default Cart
