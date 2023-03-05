import './App.css'
import { Button, ButtonGroup } from '@mui/material'
import Navbar from './components/Navbar'
import Producto from './components/Producto'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <Navbar />
      <h1>COMPRA LAS KEYS QUE NECESITES</h1>
      <div className='contenedor-categorias'>
        <ButtonGroup>
          <Button variant='text' className='boton-categoria'>SISTEMA OPERATIVO</Button>
          <Button variant='text' className='boton-categoria'>EDICION DE AUDIO</Button>
          <Button variant='text' className='boton-categoria'>JUEGO</Button>
          <Button variant='text' className='boton-categoria'>EDICION DE VIDEO</Button>
        </ButtonGroup>
      </div>
      <ItemListContainer greeting='Hola muy buenos dias!'/>
      <Producto />
    </div>
  )
}

export default App
