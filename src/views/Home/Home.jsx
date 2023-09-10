import React, { useEffect } from 'react';
import WineCard from '../../components/Card/HomeCard/HomeCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVinos } from '../../redux/actions';
import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const allVinos = useSelector((state) => state.allVinos);

  useEffect(() => {
    dispatch(getAllVinos());
  }, [dispatch]);

  return (
    <div className={styles.container_home}>
      <div>
        <p>DESTACADOS</p>
      </div>
      <div className={styles.card_grid}>
        {allVinos.map((vino) => (
          <div key={vino.id} className={styles.card_item}>
            <WineCard
              key={vino.id}
              id={vino.id}
              name={vino.name}
              imagen={
                'https://acdn.mitiendanube.com/stores/001/211/660/products/trivento-malbec1-9e50acf36f126209b416155728950925-640-0.jpg'
              }
              varietal={vino.varietal}
              vinoID={vino.id}
              precio_por_caja={vino.precio_por_caja}
              bodega={vino.bodega}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
