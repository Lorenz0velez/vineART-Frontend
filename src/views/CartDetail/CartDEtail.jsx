// import React from 'react';
// import CartDetailCard from '../../components/Card/CartDetailCard/CartDetailCard'; // Asegúrate de importar el componente CartDetailCard adecuadamente
// import './CartDetail.css'; // Importa el archivo CSS
// import { useSelector } from 'react-redux';

// function CartDetail() {
//   // Supongamos que tienes una lista de productos en tu carrito
//   const cart = useSelector((state) => state.cart)
  
//   function generarIdUnico() {
//     return Math.random().toString(36).substring(2) + Date.now().toString(36);
// }

//   return (
//     <div className="cart-detail">
//       <h1 className="cart-detail-title">Detalle del Carrito de Compras</h1>
//       <div className="cart-detail-container">
//         {cart.map((product) => (
//           <CartDetailCard key={generarIdUnico()} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CartDetail;


import React from 'react';
import CartDetailCard from '../../components/Card/CartDetailCard/CartDetailCard';
import './CartDetail.css';
import { useSelector } from 'react-redux';

function CartDetail() {
  const cart = useSelector((state) => state.cart);

  // Función para calcular la suma de los precios de los productos en el carrito
  const calcularTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  function generarIdUnico() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}


  return (
    <div className="cart-detail">
      <h1 className="cart-detail-title">Detalle del Carrito de Compras</h1>
      <div className="cart-detail-container">
        {cart.map((product) => (
          <CartDetailCard key={generarIdUnico()} {...product} />
        ))}
      </div>

      <div className="cart-summary">
        {/* <p>Total: ${calcularTotal().toFixed(2)}</p> */}
        <p>Total: $200.000</p>
        <button className="purchase-button">Realizar Compra</button>
      </div>
    </div>
  );
}

export default CartDetail;
