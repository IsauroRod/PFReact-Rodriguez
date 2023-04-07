import React from 'react'

function ProductoCheckout({producto}) {
	console.log(producto)
	return (
		<div>
			<img src={producto.foto} alt='' className='imagen' />
			<p className='nombre'>{producto.nombre}</p>
			<p className='cantidad'>2</p>
			<p>{producto.precio}</p>
		</div>
	)
}

export default ProductoCheckout
