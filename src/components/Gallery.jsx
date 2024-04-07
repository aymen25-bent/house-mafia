import styles from "./gallery.module.css";
import "./gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <figure className={`${styles.gallery__img}, ${styles.gallery__item1}`}>
        <img
          src="/gallery/img1.jpg"
          className={styles.gallery__img}
          alt="Image 1"
        />
      </figure>
      <figure className={`${styles.gallery__img}, ${styles.gallery__item2}`}>
        <img
          src="/gallery/img3.jpg"
          className={styles.gallery__img}
          alt="Image 1"
        />
      </figure>
      <figure className={`${styles.gallery__img}, ${styles.gallery__item3}`}>
        <img
          src="/gallery/img4.jpg"
          className={styles.gallery__img}
          alt="Image 1"
        />
      </figure>
      <figure className={`${styles.gallery__img}, ${styles.gallery__item4}`}>
        <img
          src="/gallery/img5.jpg"
          className={styles.gallery__img}
          alt="Image 1"
        />
      </figure>
      <figure className={`${styles.gallery__img}, ${styles.gallery__item5}`}>
        <img
          src="/gallery/img7.jpg"
          className={styles.gallery__img}
          alt="Image 1"
        />
      </figure>
      <figure className={`${styles.gallery__img}, ${styles.gallery__item6}`}>
        <img
          src="/gallery/img1.jpg"
          className={styles.gallery__img}
          alt="Image 1"
        />
      </figure>
    </div>
  );
};

export default Gallery;
