import type { NextPage } from 'next'
import Head from 'next/head'
import MiniDrawer from '../components/MiniVariantDrawer'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>えさやりチェッカー</title>
      <link rel="icon" href="/dog_food.svg" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <MiniDrawer>
      <div>メインの部分です</div>
    </MiniDrawer>
  </>)
}

export default Home
