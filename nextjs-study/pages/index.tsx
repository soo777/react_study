import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Link href="/about">
          {/*<a style={{fontSize: '20px'}}>About page</a>*/}
          <button>Got to About page</button>
        </Link>
      </div>

    </div>
  )
}

export default Home
