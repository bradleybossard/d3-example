import Link from 'next/link'
import Layout from '../components/Layout'
import Rectangle from '../components/Rectangle'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  <Rectangle />
  </Layout>

)

export default IndexPage
