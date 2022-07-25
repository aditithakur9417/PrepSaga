import { config_5 } from "../../config/config_5";
import styles from "../../styles/Mobile/CountryCity.module.scss";

const CountryCard = ({ countryItemData }) => {
  return (
    <div className={styles.countryElement}>
        <a href={countryItemData.url}>
            <div className={styles.countryContent}>
                <img src={config_5.cdn.bannersURL+countryItemData.imageURL} alt={countryItemData.title} ></img>
            </div>
            <h3 className={styles.countryText}>{countryItemData.title}</h3>
        </a>
    </div>
  )
};

export default CountryCard;
