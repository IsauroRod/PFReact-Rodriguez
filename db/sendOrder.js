import {getFirestore, collection, addDoc} from 'firebase/firestore'
import {app} from './firebase-config.js'

export const sendOrder = async (orderColl, comprador, total) => {
	const orderItems = orderColl.map((producto) => {
		return {
			title: producto.nombre,
			price: producto.precio,
			quantity: producto.cantidad,
		}
	})
	const order = {
		buyer: {
			name: comprador.nombre,
			phone: comprador.telefono,
			email: comprador.email,
		},
		items: orderItems,
		total: total,
	}

	const firestore = getFirestore(app)
	const orders = collection(firestore, 'orders')

	try {
		const docRef = await addDoc(orders, order)
		return docRef.id
	} catch (error) {
		console.error(error)
	}
}
