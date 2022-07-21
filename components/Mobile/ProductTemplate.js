import styles from "../../styles/Mobile/ProductTemplate.module.css";
import ProductCard from "./ProductCard.js";

const ProductTemplate = ({ data }) => {

  if(!data.vertical)
  {
    return(
      <div className={styles.vertical}>
        {
          data.list[0].products.map((product,i)=>{
            return <ProductCard product={product} key={i}/>
          })
        }
      </div>
    )
  }
  else{
    return(
      <div className={styles.horizontal}>
        {
          data.list[0].map((product,i)=>{
            return <ProductCard product={product} key={i}/>
          })
        }
      </div>
    )
  }

};

export default ProductTemplate;
