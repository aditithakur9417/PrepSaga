import styles from "../../styles/Mobile/ProductCard.module.css";
import { config_5 } from "../../config/config_5";

const ProductCard = ({ product }) => {

  console.log(config_5.cdn.productsURL + config_5.cdn.productsURLTransformationMNew + config_5.cdn.productsURLFolder1 + product.image)

  return (
    <div className={styles.productCard}>

        <div className={styles.shortlist}>
          <img src="https://cdn.igp.com/image/upload/v1641305750/assets/svg-icons/Heart_icon-stroke.svg" className="h-4" />
        </div>

        <a href={'/'+product.url}>
            <img className={styles.image} src={config_5.cdn.productsURL + config_5.cdn.productsURLTransformationMNew + config_5.cdn.productsURLFolder1 + product.image} alt={product.img_alt_text} />
        </a>

        <div className={styles.productInfo}>

          <span className={styles.productName}>{product.name}</span>

          <div className={styles.productInfoRow}>

            <span className={styles.productPrice}>{product.price.dprice_inr}</span>
            
            <span className={styles.discountedPrice}>{product.price.mrp_inr}</span>
            
            <span className={styles.discount}>{product.dprice_inr}% OFF</span>

          </div>

          <div className={styles.productInfoRow}>

            <span className={styles.rating}>{product.rating}</span>

            <img className={styles.fullstar} src="https://cdn.igp.com/raw/upload/assets/svg-icons/full-star.svg" />

            <span className={styles.reviews}>({product.review_count})</span>

          </div>

        </div>

    </div>
  );
};

export default ProductCard;
