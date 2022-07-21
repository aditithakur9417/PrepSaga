import Banner from "../components/Mobile/Banner";
import Carousel from "../components/Mobile/Carousel";
import ProductCard from "../components/Mobile/ProductCard";
import StatsBlock from "../components/Mobile/StatsBlock";
import SelectionPanel from "../components/Mobile/selectionPanel";
import RakhiCollection from "../components/Mobile/RakhiCollection";
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

export default function Approutes() {

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
        else if (el.title === "Rakhi Collection") {
          return <RakhiCollection collectionData={el} />;
        }
      })}

      <Banner bannersData={bannerData} />
      <StatsBlock stats={stats} />
    </div>
  );
}