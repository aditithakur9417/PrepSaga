import ProductCardStyles from "../styles/ProductCard.module.css";

const ProductCard = ({ productData }) => {
  return (
    <div className="rounded-lg w-max overflow-hidden border-2 border-slate-300 cursor-pointer">
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
        <div className="inline-block text-xs py-1 px-2 border border-blue-600 text-blue-600 ml-2 ">14% OFF</div>
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

export default ProductCard;
