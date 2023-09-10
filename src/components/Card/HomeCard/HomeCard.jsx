import React, {useEffect} from 'react';
import './HomeCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions';

const WineCard = ({ 
  vinoID,
  id, 
  name, 
  bodega, 
  imagen, 
  descripcion, 
  categoria, 
  varietal, 
  composicion_varietal, 
  añejamiento, 
  region, 
  contenido, 
  se_vende_por, 
  temperatura_de_servicio, 
  linea_del_vino, 
  precio_por_caja }) => {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  // console.log('datos del card:', vinoID, name, imagen, varietal, precio_por_caja )

function precioIndividual(){
  let precioIndividual = precio_por_caja / 6;
  return precioIndividual;
}
  function generarIdUnico() {
      return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  const bookInCart = {
    // id: generarIdUnico(),
    // vinoID: vinoID,
    id:id,
    quantity: 1,
    name:name, 
    bodega:bodega, 
    imagen:imagen, 
    descripcion:descripcion, 
    categoria:categoria, 
    varietal:varietal, 
    composicion_varietal:composicion_varietal, 
    añejamiento:añejamiento, 
    region:region, 
    contenido:contenido, 
    se_vende_por:se_vende_por, 
    temperatura_de_servicio:temperatura_de_servicio, 
    linea_del_vino:linea_del_vino, 
    precio_por_caja:precio_por_caja
  };

const handleClickAddCart = (event) => {
  event.preventDefault();
  const isAlready = cart?.find(item => item.id === id);

  if(isAlready){
    bookInCart.quantity = bookInCart.quantity++;
    dispatch(addToCart(bookInCart))
    console.log('producto repetido cart: ', cart);

  } else{
    dispatch(addToCart(bookInCart));
    console.log('producto no repetido cart: ', cart);
  }
};

return (
    <div className="wine-card">
      <img src={imagen} alt={name} className="wine-image" />
      <h2 className="wine-name">{name}</h2>
      <p className="wine-varietal">{varietal}</p>
      {<span className="wine-sale-patch">En oferta</span>}
      <div className="wine-price">
        <p className="wine-individual-price">${precioIndividual()}</p>
        <p className="wine-box-price">${precio_por_caja}</p>
      </div>
      <button className="wine-save-button" >Guardar</button>
      <button className="wine-add-to-cart-button" onClick={handleClickAddCart}>Agregar al carrito</button>
    </div>
  );
};

export default WineCard;
