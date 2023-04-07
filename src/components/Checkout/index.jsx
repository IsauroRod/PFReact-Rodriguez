import React, {useEffect, useState} from 'react'
import ProductoCheckout from '../ProductoCheckout'

function Checkout() {
	const [productos, setProductos] = useState([])

	useEffect(() => {
		fetch('/data/productos.json')
			.then((response) => response.json())
			.then((data) => {
				setProductos(data)
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<div
			className='checkoutContainer'
			style={{gridTemplateColumns: `repeat(${numColumnas}, 1fr)`}}
		>
			{/* {productos.map((prod) => {
				return <ProductoCheckout key={prod.id} producto={prod} />
			})} */}
			<ProductoCheckout key={2} producto={productos[2]} />
		</div>
	)
}

export default Checkout
