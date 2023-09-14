import React, {useEffect} from 'react';
import styles from './HomeCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as lightFaBookMark } from '@fortawesome/free-solid-svg-icons';


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

// const handleClickSaveButton = (click) => {
//   if (click = true){
//     return(
//       <FontAwesomeIcon icon={solid("bookmark")}className={styles.button_guardado}/>
//     )
//   } else{
//     return(
//       <FontAwesomeIcon icon={solid("bookmark")}className={styles.button_guardado}/>
//     )
//   }
// }

return (
    <div className={styles.wine_card}>
      <img src={imagen} alt={name} className={styles.wine_image} />
      <h2 className={styles.wine_name}>{name}</h2>
      <p className={styles.wine_varietal}>{varietal}</p>
      {
        <span className={styles.wine_sale_patch} >En oferta</span>
      }
      <div className={styles.wine_price}>
        <p className={styles.wine_individual_price}>${precioIndividual()}</p>
        <p className={styles.wine_box_price}>${precio_por_caja}</p>
      </div>
      {/* <FontAwesomeIcon icon={faBookmark} onClick={handleClickSaveButton(true)} className={styles.guardar_button}/> */}
      <FontAwesomeIcon icon={lightFaBookMark} className={styles.guardar_button}/>
      {/* <FontAwesomeIcon icon="fa-light fa-bookmark" className={styles.guardar_button}/> */}
      <button className={styles.wine_add_to_cart_button} onClick={handleClickAddCart}>Agregar al carrito</button>
    </div>
  );
};

export default WineCard;
