import ProductCardStyles from "../../styles/Web/ProductCard.module.css";

/**
 *
 * Returns banner component
 *
 * @param {object} productData object containing banner data
 * @returns ProductCard component
 *
 */

const ProductCard = ({ productData }) => {
  return (
    <div className="rounded-xl w-max overflow-hidden border-2 border-slate-300 cursor-pointer relative">
      <div className="rounded-bl-2xl absolute -top-px -right-px w-8 h-8 bg-white opacity-75 flex justify-center items-center">
        <img
          src="https://cdn.igp.com/image/upload/v1641305750/assets/svg-icons/Heart_icon-stroke.svg"
          className="h-4"
        ></img>
      </div>
      <img src={productData.image} alt={productData.alt} />
      <p className="text-sm font-medium mx-2 mt-2">{productData.name}</p>
      <div className="mx-2 flex align-middle mt-2">
        <span className="text-base font-bold">
          {productData.discountedPrice}
        </span>
        <span
          className={`relative text-base font-bold ml-1 text-gray-600 ${ProductCardStyles.strike}`}
        >
          {productData.originalPrice}
        </span>
        <div className="inline-block text-xs py-1 px-2 border border-blue-600 text-blue-600 ml-2 ">
          14% OFF
        </div>
      </div>
      <div className="flex text-xs m-2">
        <span className="mr-1">{productData.rating}</span>
        <img
          className="mr-1"
          src="https://cdn.igp.com/raw/upload/assets/svg-icons/full-star.svg"
        />
        <span>{productData.numberOfReviewers}</span>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  productData: {
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-delicious-kaju-katli-500-gm--101059-m.jpg",
    alt: "Kaju Katli",
    name: "Delicious Kaju Katli (500 gm)",
    originalPrice: "₹ 695",
    discountedPrice: "₹ 595",
    rating: "4.5",
    numberOfReviewers: "(263)",
  },
};

export default ProductCard;
