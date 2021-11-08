import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return (
    <Layout>
      <p>Hello, my name is {router.query.post}. I use Next.js</p>
    </Layout>
  );
}

export default Post
