import { server } from '../config'
import ArticleList from '../components/ArticleList'
import {useDispatch} from 'react-redux';
import {loadData} from '../actions';
import { useEffect } from 'react';

export default function Home({ articles }) {
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log('index page log');
    dispatch(loadData());
  }, []);
  return (
    <div>
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
