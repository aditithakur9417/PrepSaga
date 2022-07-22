import Banner from "../components/Mobile/Banner";
import Carousel from "../components/Mobile/Carousel";
import ProductCardTemplate from "../components/Mobile/ProductTemplate";
import StatsBlock from "../components/Mobile/StatsBlock";
import LensesWidget from "../components/Mobile/LensesWidget";
import Collection from "../components/Mobile/Collection";
import SelectionPanel from "../components/Mobile/SelectionPanel";
import Categories from "../components/Mobile/Categories";
import Frames from "../components/Mobile/Frames";
import { homeData } from "../data/homeData";
import CountryCity from "../components/Mobile/CountryCity";

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
  const homepageWidgets = homeData.api_homeRevamp.map((widget) => {
    switch (widget.type) {
      case "banners":
        return <Carousel key={widget.id} carouselData={widget} />;
      case "tiles":
        return <SelectionPanel key={widget.id} panelData={widget} />;
      case "lenses":
        return <LensesWidget key={widget.id} LensesWidgetData={widget} />;
      case "product_list":
        return <ProductCardTemplate key={widget.id} data={widget} />;
      case "collections":
        return <Collection key={widget.id} collectionData={widget} />;
      case "categories":
        return <Categories key={widget.id} categoriesData={widget} />;
      case "frames":
        return <Frames key={widget.id} framesData={widget}/>;
      case "country_city":
        return <CountryCity key={widget.id} countryData={widget}/>;

      default:
        console.log("Component for " + widget.type + " widget not rendered.");
        break;
    }
  });

  return (
    <>
      {homepageWidgets}
      <Banner bannersData={bannerData} />
      <StatsBlock stats={stats} />
    </>
  );
}
