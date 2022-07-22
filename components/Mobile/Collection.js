import React from "react";
import styles from '../../styles/Mobile/RakhiCollection.module.scss';
import "@fontsource/montserrat";
import { config_5 } from "../../config/config_5";

const RakhiCollection = ({collectionData}) => {

  return (
<div className={styles.collectionTiles}>

  <div className={styles.textBox}>
    <div className={styles.heading}>{collectionData.title}</div>
    <div className={styles.subTitle}>{collectionData.subTitle}</div>
  </div>

  {/* {console.log("test data - "+(collectionData.list.length-1))} */}

  {(collectionData.list.length-1)==5 ? 
  <div>


   <div className={styles.fiveBlocks}>
   <div className={styles.flexRow} >

   <div className={styles.flexColumn}>
   <a className={styles.squareTile20} href={collectionData.list[0].url} >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[0].imageURL} placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[0].title}</span>        
         </div>
       </a>

       <a className={styles.squareTile10} style={{marginTop:16}} href={collectionData.list[2].url}  >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[2].imageURL} placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[2].title}</span> 
         </div>
       </a>
    </div>

    <div className={styles.flexColumn}>
    <a className={styles.squareTile10}  href={collectionData.list[2].url}  >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[2].imageURL} placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[2].title}</span> 
         </div>
       </a>

       <a className={styles.squareTile20} style={{marginTop:16}}  href={collectionData.list[3].url} >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[3].imageURL}  placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[3].title}</span> 
         </div>
       </a>
    </div>


    </div>

    <a className={styles.horizontalTile} style={{marginTop:16}} href={collectionData.list[4].url} >
    <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[4].imageURL}  placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[4].title}</span> 
    
            </div>
          
        </a>  
    </div>

   
  </div>
   :
  <div className={styles.sixBlocks}>
   <div className={styles.flexColumn}>
       <a className={styles.squareTile15} style={{marginTop:16}} href={collectionData.list[4].url} >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[4].imageURL}  placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[4].title}</span>
         </div>
       </a>
       <a className={styles.squareTile10} style={{marginTop:16}} href={collectionData.list[0].url} >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[0].imageURL} placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[0].title}</span>        
         </div>
       </a>
       <a className={styles.squareTile10} style={{marginTop:16}} href={collectionData.list[1].url} >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[1].imageURL}  placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[1].title}</span>   
         </div>
       </a>
   </div>
   <div className={styles.flexColumn}>
       <a className={styles.squareTile10} style={{marginTop:16}} href={collectionData.list[2].url}  >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[2].imageURL} placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[2].title}</span> 
         </div>
       </a>
       <a className={styles.squareTile15} style={{marginTop:16}}  href={collectionData.list[3].url} >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[3].imageURL}  placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[3].title}</span> 
         </div>
       </a>
       <a className={styles.squareTile10} style={{marginTop:16}} href={collectionData.list[5].url}  >
         <img className={styles.imgResponsive} src={config_5.cdn.bannersURL+collectionData.list[5].imageURL}  placeholder=" "/>
         <div className={styles.tileContainer}>
             <span className={styles.tileName}>{collectionData.list[5].title}</span> 
         </div>
       </a>
   </div>
 </div>
   }

</div>
  );
};
export default RakhiCollection;
