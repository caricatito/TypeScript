import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { useForm } from "../../hooks/useForm"
import { FC } from "react"

interface IpropsFormProduct{
    handleAddProduct: Function;
}

export const FormProduct: FC<IpropsFormProduct>= ({handleAddProduct}) => {
  
  const {handleChange, values, resetForma} = useForm({
    nombre: '',
    imagen:'',
    precio:0
  })

  const handleSubmitForm = () =>{
    handleAddProduct(values)
    resetForma();
  }
  


    return (
    <Form className="p-4 border rounded m-3">
        
        <FormGroup controlId="formNombre">
            <FormLabel>Nombre</FormLabel>
            <FormControl 
            type="text" 
            name="nombre" 
            placeholder="Ingrese nombre Producto" 
            value={values.nombre} 
            onChange={handleChange}>
            </FormControl>
        </FormGroup>

        <FormGroup controlId="formNombre">
            <FormLabel>Imagen</FormLabel>
            <FormControl 
            type="text" 
            name="imagen" 
            placeholder="Ingrese imagen del Producto" 
            value={values.imagen} 
            onChange={handleChange}>
            </FormControl>
        </FormGroup>

        <FormGroup controlId="formNombre">
            <FormLabel>Precio</FormLabel>
            <FormControl 
            type="number" 
            name="precio" 
            placeholder="Ingrese precio del Producto" 
            value={values.precio} 
            onChange={handleChange}>
            </FormControl>
        </FormGroup>

        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmitForm} variant="primary">Enviar Producto</Button>
        </div>

    </Form>
  )
}
