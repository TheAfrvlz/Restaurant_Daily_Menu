import './App.css'
import DailyCalendar from './DailyCalendar'
import DailyCalendarPost from './DailyCalendarPost'
import Registro from './Registro'
import Menu from './Menu'

import { Route, Routes, Link } from 'react-router-dom'

const Dias = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado'
}
const CurrentDay = () => {
  const Day = new Date()
  return `${Dias[Day.getDay()]} ${Day.getDate()}`
}

function App () {
  return (
    <div className="App">

      <div className="Nav">
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/Post">Set Menu</Link>
        <Link className="Link" to="/Menu">Menu</Link>
        <Link className="Link" to="/Registro">Registro</Link>
      </div>

      <Routes>
        <Route exact path='/' element={<DailyCalendar Day={CurrentDay()} />} />
        <Route exact path='/Post' element={<DailyCalendarPost Day={CurrentDay()} />} />
        <Route exact path='/Menu' element={<Menu />} />
        <Route exact path='/Registro' element={<Registro />} />
      </Routes>

    </div>
  )
}

export default App
