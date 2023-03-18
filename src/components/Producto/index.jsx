import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Button} from '@mui/material'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'
import './producto.css'

export default function Producto({producto}) {
	return (
		<Card sx={{maxWidth: 345, minHeight: 340}} className='display-inline'>
			<CardMedia
				sx={{height: 140}}
				image={producto.foto}
				title={producto.nombre}
				alt={producto.nombre}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{producto.nombre}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{producto.descripcion}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' variant='outlined'>
					Agregar
				</Button>
				<Link to={`/item/${producto.id}`} className='link'>
					<Button size='small' variant='outlined'>
						Ver mas
					</Button>
				</Link>
				<p className='texto-precio'>${producto.precio}</p>
			</CardActions>
		</Card>
	)
}
