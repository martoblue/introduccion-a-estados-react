import Button from 'react-bootstrap/Button';

function Boton({ texto, manejarClick, variant }) {
  return (
    <>
      <Button onClick={manejarClick} variant={variant}>
        {texto}
      </Button>
    </>
  );
}

export default Boton;
