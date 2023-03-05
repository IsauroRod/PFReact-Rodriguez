import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';

//Lo hice para usarlo en la proxima entrega, por eso no esta con props

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="src/assets/image.jpg"
        title="windows 11 pro"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Windows 11 Pro
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Windows 11 Pro ofrece características avanzadas de seguridad, productividad y gestión, lo que lo convierte en una gran opción para empresas y usuarios avanzados.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Agregar</Button>
        <Button size="small" variant="outlined">Ver mas</Button>
      </CardActions>
    </Card>
  );
}