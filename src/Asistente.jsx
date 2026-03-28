const Asistente = ({nombre,tarea,emoji}) => {
    return (
        <div>
            <h3>Nombre: {nombre} </h3>
            <p>Tarea: {tarea} </p>
            <p>Emoji: {emoji} </p>
        </div>
    );
}
export default Asistente;