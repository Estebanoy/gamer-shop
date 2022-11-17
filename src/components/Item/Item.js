

const Item = ({elemento}) => {
  return (
    <div style={{border:'1px solid black'}}>
        <img style={{width:'50%'}} alt={elemento.nombre} src={`img/${elemento.img}.webp`}/>
        <h2>{elemento.nombre}</h2>
        <h2>{elemento.marca}</h2>
        <h2>Precio:{elemento.precio}$</h2>
        <button>Detalles</button>
    </div>
  )
}

export default Item