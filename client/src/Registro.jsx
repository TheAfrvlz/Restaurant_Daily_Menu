import './Registro.css'

function Registro () {
  return (
    <div className='Registro'>
      <h1 > Registro Usuario </h1>
      <form>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Direccion' />

        <select name="cars" className="FoodCat" id="cars" placeholder='Forma de PAgo'>
          <option value="volvo">Efectivo</option>
          <option value="saab">Tarjeta</option>
        </select>

        <input type="text" placeholder='Quien Recibe' />
        <input type="button" value="Agregar" />
      </form>

      <h1> Direcciones </h1>
      <div className="Direcciones">

        <div className="Address">
          <div className="Component">
          <h1>Nombre:</h1> <p></p>
          </div>
          <div className="Component">
          <h1>Apellido:</h1> <p>lorem ipsum</p>
          </div>
          <div className="Component">
          <h1>Direccion:</h1> <p>lorem ipsum</p>
          </div>
          <div className="Component">
          <h1>Pago:</h1> <p>lorem ipsum</p>
          </div>
          <div className="Component">
          <h1>Recibe:</h1> <p>lorem ipsum</p>
          </div>
          <button>Eliminar</button>
        </div>

      </div>

    </div>
  )
}

export default Registro
