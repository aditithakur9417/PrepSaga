import { server } from "../config";
import ArticleList from "../components/ArticleList";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import StatsBlock from "../components/StatsBlock";
import { useDispatch } from "react-redux";
import { loadData } from "../actions";
import { useEffect } from "react";
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

const carouselData = {
  id: 24,
  type: "banners",
  title: "Banner",
  backgroundImage: "",
  url: "",
  lazyLoad: false,
  vertical: false,
  viewAll: "View All",
  subTitle: "",
  list: [
    {
      catId: 1235,
      title: "Same Day Delivery",
      url: "/same-day-delivery-gifts",
      banGroup: "banGrp2",
      imageURL:
        "https://cdn.igp.com/f_auto,q_auto,t_pnopt26prodlp/banners/personalized_gifts_banner_d_20220216.jpg",
      htmlText: "HTML TEXT",
      trackEvent: "TrkEvent",
      site: 57,
    },
    {
      catId: 789,
      title: "Anniversary",
      url: "/anniversary-gifts",
      banGroup: "bangrp3",
      imageURL:
        "https://cdn.igp.com/f_auto,q_auto,t_pnopt15prodlp/banners/m-banners_anniversary_20220121.png",
      htmlText: "HTML3",
      trackEvent: "TrkEVT3",
      site: 79,
    },
  ],
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

const productData = {
  image:
    "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-delicious-kaju-katli-500-gm--101059-m.jpg",
  alt: "Kaju Katli",
  name: "Delicious Kaju Katli (500 gm)",
  originalPrice: "₹ 695",
  discountedPrice: "₹ 595",
  rating: "4.5",
  numberOfReviewers: "(263)",
};

export default function Home({ articles }) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("index page log");
    dispatch(loadData());
  }, []);
  return (
    <div>
      <Banner bannersData={bannerData} />
      <Carousel carouselData={carouselData} />
      <ArticleList articles={articles} />
      <ProductCard />
      <StatsBlock stats={stats} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
