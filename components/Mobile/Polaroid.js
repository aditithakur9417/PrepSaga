import React from "react";
import styles from "../../styles/Mobile/Polaroid.module.scss";

const Polaroid = ({ polaroidData }) => {
return(

<div className={styles.polaroid}>
   <div className={styles.heading}>
      {polaroidData.subTitle}
   </div>
   <div className={styles.polaroidRow}>
      {polaroidData.list?.map((data, i) => (
      <>
      {data.name.length > 0 ? 
      <a href={data.url} className={styles.polaroidCardImage} >
         <div className={styles.polaroidImage}>
            <img className={styles.imgResponsive} src={"https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/"+data.image}  />
         </div>
         <div className={styles.polaroidDetails}>
            {data.name}
         </div>
      </a>
      
      : 
      
      <a href={data.url} className={styles.polaroidCard} >
         <div className={styles.polaroidImage}>
            <img className={styles.imgResponsive} src={"https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/"+data.image}  />
         </div>
      </a>
      }
      </>
      ))}
   </div>
</div>

)

}
export default Polaroid;