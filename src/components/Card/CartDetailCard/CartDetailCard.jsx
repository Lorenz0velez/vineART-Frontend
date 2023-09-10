import React from 'react';
import './CartDetailCard.css'; // Importa el archivo CSS
import { useSelector } from 'react-redux';

function CartDetailCard(props) {

    const cart = useSelector((state) => state.cart);
    const vinoDetail = useSelector((state) => state.vinoDetail);

    return (
        <div className="cart-detail-card">
          <div className="cart-detail-card-image-container">
            <img src={props.imagen} alt={props.name} className="cart-detail-card-image" />
          </div>
          <div className="cart-detail-card-info">
            <h2 className="cart-detail-card-name">{props.name}</h2>
            <p className="cart-detail-card-varietal">Varietal: {props.varietal}</p>
            <p className="cart-detail-card-price-box">Precio por caja: ${18300}</p>
            <p className="cart-detail-card-price-bottle">Precio individual: ${2500}</p>
            <p className="cart-detail-card-bottles-pack">Por cajas de x6 botellas</p>
            <p className="cart-detail-card-composition">Composición varietal: 100% MALBEC</p>
            <p className="cart-detail-card-aging">Añejamiento: 1.000.000 de años</p>
          </div>
        </div>
      );
}

export default CartDetailCard;
