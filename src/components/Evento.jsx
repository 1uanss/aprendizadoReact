import Button from './evento/Button'

function Evento(){
    function meuEvento(){
        console.log("Ativando primeiro evento.")
    }
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="primeiro Evento"> </Button>
        </div>
    )
}
export default Evento