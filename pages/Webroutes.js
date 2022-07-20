import Banner from "../components/Web/Banner";
import Carousel from "../components/Web/Carousel";
import ProductCard from "../components/Web/ProductCard";
import StatsBlock from "../components/Web/StatsBlock";
import SelectionPanel from "../components/Web/SelectionPanel";
import { homeData } from "../data/homeData";

const bannerData = {
  catId: 1235,
  title: "Same Day Delivery",
  url: "/same-day-delivery-gifts",
  banGroup: "banGrp2",
  imageURL:
    "https://cdn.igp.com/f_auto,q_auto,t_pnopt28prodlp/banners/igp_sale_20180216.jpg",
  htmlText: "HTML TEXT",
  trackEvent: "TrkEvent",
  site: 57,
};

const stats = [
  // -- not from api json
  {
    id: 1,
    statNumber: "400+",
    statName: "Cities having same day delivery",
  },
  {
    id: 2,
    statNumber: "100+",
    statName: "Countries being served with happiness",
  },
  {
    id: 3,
    statNumber: "5 Million +",
    statName: "Gift boxes delivered worldwide",
  },
];

export default function Webroutes() {

  return (
    <div>
      {homeData.api_homeRevamp.map((el) => {
        if (el.type === "banners") {
          return <Carousel carouselData={el} />;
        } else if (el.type === "product_list") {
          return <ProductCard />;
        } else if (el.type === "tiles") {
          return <SelectionPanel panelData={el} />;
        }
      })}

      <Banner bannersData={bannerData} />
      <StatsBlock stats={stats} />
    </div>
  );
}