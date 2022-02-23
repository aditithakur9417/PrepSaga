import { server } from '../config'
import ArticleList from '../components/ArticleList'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'

const bannerData = {
  "catId": 1235,
  "title": "Same Day Delivery",
  "url": "/same-day-delivery-gifts",
  "banGroup": "banGrp2",
  "imageURL": "https://cdn.igp.com/f_auto,q_auto,t_pnopt28prodlp/banners/igp_sale_20180216.jpg",
  "htmlText": "HTML TEXT",
  "trackEvent": "TrkEvent",
  "site": 57
}

const carouselData = {
  "id": 24,
  "type": "banners",
  "title": "Banner",
  "backgroundImage": "",
  "url": "",
  "lazyLoad": false,
  "vertical": false,
  "viewAll": "View All",
  "subTitle": "",
  "list": [
    // {
    //   "catId": 1235,
    //   "title": "Same Day Delivery",
    //   "url": "/same-day-delivery-gifts",
    //   "banGroup": "banGrp2",
    //   "imageURL": "https://cdn.igp.com/f_auto,q_auto,t_pnopt26prodlp/banners/personalized_gifts_banner_d_20220216.jpg",
    //   "htmlText": "HTML TEXT",
    //   "trackEvent": "TrkEvent",
    //   "site": 57
    // },
    {
      "catId": 789,
      "title": "Anniversary",
      "url": "/anniversary-gifts",
      "banGroup": "bangrp3",
      "imageURL": "https://cdn.igp.com/f_auto,q_auto,t_pnopt15prodlp/banners/m-banners_anniversary_20220121.png",
      "htmlText": "HTML3",
      "trackEvent": "TrkEVT3",
      "site": 79
    }
  ]
}

export default function Home({ articles }) {
  return (
    <div>
      <Banner bannersData={bannerData} />
      <Carousel carouselData={carouselData}/>
      <ArticleList articles={articles} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
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
