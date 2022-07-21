import React from "react";
import styles from "../../styles/Web/selectionPanel.module.css";
import "@fontsource/montserrat";

const SelectionPanel = ({ panelData }) => {
  return (
    <div>
      <section className={styles.selectionPanel}>
        <div className={styles.widgetArrangement}>
          {panelData.list?.map((data) => (
            <a className={styles.tile8} href={data.url}>
              <img
                className={styles.selectionPanelImage}
                src={"https://cdn.igp.com/assets/svg-icons/" + data.imageURL}
              />
              <span className={styles.selectionPanelText}>{data.title}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
export default SelectionPanel;
