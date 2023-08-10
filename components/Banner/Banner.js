import Image from "next/image";
import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <section className={styles.banner__section}>
      <div className={`${styles.banner__container} container`}>
        <h1 className={styles.title}>
          <span className={styles.white}>Coffee</span>&nbsp;
          <span className={styles.purple}>Connoisseur</span>
        </h1>
        <p className={styles.sub__title}>Discover your local coffee shops!</p>
        <div className={styles.btn__wrapper}>
          <button className={styles.btn} onClick={props.handleOnClick}>
            {props.buttonTxt}
          </button>
        </div>
        <Image
          src="/static/hero-image.png"
          width={700}
          height={400}
          alt="Hero Image"
          className={styles.hero__image}
        />
      </div>
    </section>
  );
};

export default Banner;
