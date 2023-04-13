import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
    return(
        <div className='col-12 col-sm-10 col-md-6 mx-auto mt-5'>
            <h2>Cuentanos, ¿En que podemos ayudarte?</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@HappyCake.com" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Button variant="danger" type="submit">
                Enviar
                </Button>
            </Form>
        </div>

    )
}

export default Contacto