import React from "react";
import styles from "../../styles/Mobile/selectionPanel.module.css";
import "@fontsource/montserrat";

const SelectionPanel = ({ panelData }) => {
  return (
    <div>
      <section className={styles.selectionPanel}>
        <div className={styles.widgetArrangement}>
          {panelData.list?.map((data, i) => (
            <a className={styles.tile8} href={data.url} key={i}>
              {/* {console.log(`value of i is ${i}`)} */}
              {i < 4 ? <div className={styles.bottomline}></div> : ""}

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
