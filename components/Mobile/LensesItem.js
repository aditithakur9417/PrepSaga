import { config_5 } from "../../config/config_5";
import styles from "../../styles/Mobile/LensesItem.module.scss";

const LensesItem = ({ LensesItemData }) => {
  return (
    <a href={LensesItemData.url} className={styles.lenseBox}>
      <img src={config_5.cdn.bannersURL + LensesItemData.image} className={styles.lenseImg} />
      <span className={styles.lenseText}>{LensesItemData.name}</span>
    </a>
  );
};

export default LensesItem;
