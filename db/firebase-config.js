import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDaJbl8wxp3QHN4JPAcGPIwmR9jYBY5xQ0',
	authDomain: 'ecommerce-37e14.firebaseapp.com',
	projectId: 'ecommerce-37e14',
	storageBucket: 'ecommerce-37e14.appspot.com',
	messagingSenderId: '1006708008561',
	appId: '1:1006708008561:web:a62cb4c7c4e6e4281a1dd0',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
