import styles from "../../styles/Mobile/Categories.module.css";
import { config_5 } from "../../config/config_5";
const Categories = ({ categoriesData }) => {
  return (
    <div className={styles.container}>
      {categoriesData.list.map((data, i) => (
        <div className={styles.categoriesList}>
          {data.imagepos == "Left" ? (
            <>
              <img
                src={
                  config_5.cdn.assetsBaseURL +
                  "f_auto,q_auto,t_pnopt30prodlp/banners/" +
                  data.imageURL
                }
                alt=""
                className={styles.categoryImg}
              />
              <div className={styles.subCategoriesList}>
                <h1 className={styles.subCategorieHead}>{data.title}</h1>

                <div>
                  {data.subCategories.map((sub) => (
                    <h3 className={styles.subCategoriesLinks}>{sub.title}</h3>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.subCategoriesListRt}>
                <h1>{data.title}</h1>
                <div>
                  {data.subCategories.map((sub) => (
                    <h3 className={styles.subCategoriesLinks}>{sub.title}</h3>
                  ))}
                </div>
              </div>
              <img
                src={
                  config_5.cdn.assetsBaseURL +
                  "f_auto,q_auto,t_pnopt30prodlp/banners/" +
                  data.imageURL
                }
                alt=""
                className={styles.categoryImg}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
