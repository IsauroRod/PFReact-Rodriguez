import {useContext, useState} from 'react'
import {CartContext} from '../../contexts/CartContext'
import {Box, Button, TextField} from '@mui/material'

const BotonCarrito = ({producto, cantidad}) => {
	const {actualizarCantidad, addItem} = useContext(CartContext)
	const [count, setCount] = useState(cantidad)

	const handleIncrement = () => {
		setCount(count + 1)
		addItem(producto, 1)
	}

	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1)
			addItem(producto, -1)
		}
	}

	const handleCountChange = (e) => {
		const value = parseInt(e.target.value)
		if (!isNaN(value) && value >= 0) {
			setCount(value)
			actualizarCantidad(producto, value)
		}
	}

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			style={{padding: '10px'}}
		>
			<Button variant='contained' color='primary' onClick={handleDecrement}>
				-
			</Button>
			<TextField
				id='count'
				label='Cantidad'
				type='number'
				value={count}
				onChange={handleCountChange}
				InputLabelProps={{
					shrink: true,
				}}
				variant='outlined'
				style={{margin: '0 10px'}}
			/>
			<Button variant='contained' color='primary' onClick={handleIncrement}>
				+
			</Button>
		</Box>
	)
}

export default BotonCarrito
