import type { NextPage } from 'next'
import Link from 'next/link'
import React from "react";
import Layout from "./components/Layout";

const PostLink = (props:any) => (
  <li>
    {/*<Link as={`/p/[post]`} href={`/post?title=${props.title}`}>*/}
    <Link href={`/p/[post]`} as={`/p/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Home: NextPage = () => (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js"/>
        <PostLink title="Learn Next.js is awesome"/>
        <PostLink title="Deploy apps with Zeit"/>
      </ul>
    </Layout>
)

export default Home
