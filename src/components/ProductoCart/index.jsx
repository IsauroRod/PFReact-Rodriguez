import BotonCarrito from '../BotonCarrito'
import './productoCart.css'

function ProductoCart({producto}) {
	return (
		<>
			<img src={producto.foto} alt='' className='imagen' />
			<p className='estilo-cart'>{producto.nombre}</p>
			<p className='estilo-cart'>{producto.precio}</p>
			<BotonCarrito producto={producto} cantidad={producto.cantidad} />
			<p className='estilo-cart'>{producto.cantidad * producto.precio}</p>
		</>
	)
}

export default ProductoCart
