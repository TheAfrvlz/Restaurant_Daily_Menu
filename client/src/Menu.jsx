import './Menu.css'

function Menu () {
  return (
<div class="menu">
  <div class="category">
    <div class="items">
      <div class="item">
        <a href="#Desayunos">Desayunos</a>
      </div>
      <div class="item">
        <a href="#Comidas">Comidas</a>
      </div>
      <div class="item">
        <a href="#Cenas">Cenas</a>
      </div>
      <div class="item">
        <a href="#Sopas">Sopas</a>
      </div>
      <div class="item">
        <a href="#Ensaladas">Ensaladas</a>
      </div>
      <div class="item">
        <a href="#Carnes">Carnes</a>
      </div>
      <div class="item">
        <a href="#Paquetes">Paquetes</a>
      </div>
      <div class="item">
        <a href="#Mariscos">Mariscos</a>
      </div>
      <div class="item">
        <a href="#Postres">Postres</a>
      </div>
      <div class="item">
        <a href="#Bebidas">Bebidas</a>
      </div>

    </div>
  </div>
    <div className="FoodCat" id="Desayunos"></div>
    <div className="FoodCat" id="Comidas"></div>
    <div className="FoodCat" id="Cenas"></div>
    <div className="FoodCat" id="Sopas"></div>
    <div className="FoodCat" id="Ensaladas"></div>
    <div className="FoodCat" id="Carnes"></div>
    <div className="FoodCat" id="Paquetes"></div>
    <div className="FoodCat" id="Mariscos"></div>
    <div className="FoodCat" id="Postres"></div>
    <div className="FoodCat" id="Bebidas"></div>
</div>

  )
}

export default Menu
