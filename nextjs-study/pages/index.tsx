import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import axios from "axios";

const PostLink = (props:any) => (
  <li>
    {/*<Link as={`/p/[post]`} href={`/post?title=${props.title}`}>*/}
    <Link href={`/p/[post]`} as={`/p/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Home: NextPage = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    async function getData() {
      const result =  await axios.get('http://localhost:4000/posts');
      console.log(result.data);

      setArr(result.data);
    }

    // json-server 세팅 필요
    getData();
  }, [])


  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {/*<PostLink title="Hello Next.js"/>*/}
        {/*<PostLink title="Learn Next.js is awesome"/>*/}
        {/*<PostLink title="Deploy apps with Zeit"/>*/}
        {
          arr.map((data:any)=> (
            <PostLink key={data.id} title={data.title}/>
          ))
        }
      </ul>
    </Layout>
  )

}


export default Home
