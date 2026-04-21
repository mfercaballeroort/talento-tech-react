// TarjetaProducto.jsx
import React from 'react';
import styles from './TarjetaProducto.module.css'; // Importación como módulo

const TarjetaProducto = ({ imagen, nombre, precio }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Si no hay imagen, mostramos un texto alternativo por defecto */}
        {imagen ? (
          <img src={imagen} alt={`Imagen de ${nombre}`} className={styles.image} />
        ) : (
          <span>Sin imagen</span>
        )}
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{nombre}</h2>
        <span className={styles.price}>${precio.toLocaleString()}</span>
      </div>
    </article>
  );
};

export default TarjetaProducto;