import CountryCard from "./CountryCard";
import styles from "../../styles/Mobile/CountryCity.module.scss";

const CountryCity = ({ countryData }) => {
  const countryList = countryData.list.map((CountryItem) => (
    <CountryCard key={CountryItem.title} countryItemData={CountryItem} />
  ));

  return <div className={styles.countryContainer}> {countryList} </div>;
};

export default CountryCity;
