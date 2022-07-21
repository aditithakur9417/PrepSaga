import LensesItem from "./LensesItem";
import styles from "../../styles/Mobile/LensesItem.module.scss"

const LensesWidget = ({ LensesWidgetData }) => {
  const LensesList = LensesWidgetData.list.map((LenseItem) => (
    <LensesItem key={LenseItem.id} LensesItemData={LenseItem} />
  ));

  const styleType = LensesWidgetData.style === "horizontal" ? styles.lenseHorizontal : styles.lenseVertical
  return <div className={styleType}>{LensesList}</div>;
};

export default LensesWidget;
