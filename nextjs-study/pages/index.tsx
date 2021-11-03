import type { NextPage } from 'next'
import Link from 'next/link'
import Header from "./components/Header";
import React from "react";
import Layout from "./components/Layout";

const Home: NextPage = () => {
  return (
    // <div>
    //   <div>
    //     <Header />
    //     <Link href="/about">
    //       <button>Got to About page</button>
    //     </Link>
    //   </div>
    //
    // </div>

    <Layout>
      <p>This is the about apge</p>
    </Layout>
  )
}

export default Home
