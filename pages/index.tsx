import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Header /> */}
      <div className="mt-10"></div>
      {/* <Trending /> */}
      <div className="mt-20"></div>
      {/* <CMCtable /> */}
      <div className="mt-20"></div>
      {/* <Header /> */}
    </div>
  )
}

export default Home
