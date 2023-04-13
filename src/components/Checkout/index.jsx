import {Button, CircularProgress} from '@mui/material'
import {sendOrder} from '/db/sendOrder'
import 'checkout.css'
import {CartContext} from '../../contexts/CartContext'
import {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Checkout() {
	const {clear, cartProds, calcularTotal} = useContext(CartContext)
	const [emailsCoinciden, setEmailsCoinciden] = useState(false)
	const [loading, setLoading] = useState(false)
	const [orderId, setOrderId] = useState(null)
	const [cliente, setCliente] = useState({
		nombre: '',
		email: '',
		emailConfirm: '',
		telefono: '',
	})

	const handleSubmit = async (e) => {
		setLoading(true)
		e.preventDefault()
		const id = await sendOrder(cartProds, cliente, calcularTotal())
		setOrderId(id)
		clear()
		setLoading(false)
	}

	const handleChange = (e) => {
		const {name, value} = e.target
		setCliente((prevCliente) => ({...prevCliente, [name]: value}))
	}

	useEffect(() => {
		confirmar()
	}, [cliente])

	const confirmar = () => {
		if (
			cliente.email === cliente.emailConfirm &&
			cliente.email !== '' &&
			cliente.emailConfirm !== '' &&
			cliente.nombre !== '' &&
			cliente.telefono !== ''
		) {
			setEmailsCoinciden(true)
		} else {
			setEmailsCoinciden(false)
		}
	}

	if (loading) {
		return (
			<div className='loading-container'>
				<CircularProgress size={150} />
			</div>
		)
	}

	if (cartProds.length > 0 && orderId === null) {
		return (
			<form className='formContainer' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Nombre'
					className='inputField'
					name='nombre'
					value={cliente.nombre}
					onChange={handleChange}
				/>
				<input
					type='email'
					placeholder='Email'
					className='inputField'
					name='email'
					value={cliente.email}
					onChange={handleChange}
				/>
				<input
					type='email'
					placeholder='Confirmar Email'
					className='inputField'
					name='emailConfirm'
					value={cliente.emailConfirm}
					onChange={handleChange}
				/>
				<input
					type='tel'
					placeholder='Telefono'
					className='inputField'
					name='telefono'
					value={cliente.telefono}
					onChange={handleChange}
				/>
				{/* <Link to='/' style={{pointerEvents: emailsCoinciden ? 'auto' : 'none'}}> </Link>*/}
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className='submitButton'
					disabled={!emailsCoinciden}
					style={{backgroundColor: emailsCoinciden ? 'green' : 'red'}}
				>
					{emailsCoinciden ? 'Enviar' : 'Correos no coinciden'}
				</Button>
			</form>
		)
	}
	if (cartProds.length == 0 && orderId === null) {
		return (
			<h2 className='estilo-checkout'>
				Porfavor confirme la compra previamente
			</h2>
		)
	}

	if (orderId !== null) {
		return (
			<>
				<h2 className='estilo-checkout'>Compra registrada con exito!</h2>
				<p className='estilo-par-checkout'>
					Gracias por tu compra, tu numero de orden es: {orderId}
				</p>
				<Link to='/' style={{pointerEvents: emailsCoinciden ? 'auto' : 'none'}}>
					<Button variant='contained'>Volver</Button>
				</Link>
			</>
		)
	}
}
export default Checkout
