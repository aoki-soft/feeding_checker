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
      <div>12月31日 日曜日</div>
      
      <div>
        <div>
          えさをあげる人
        </div>
        <div>
          <button>ぷっちょ</button>
          <button>次男</button>
          <button>末っ子</button>
          <button>母</button>
          <button>父</button>
        </div>
      </div>

      <div>
        <div>
          えさを与えたら押してください
        </div>
        <div>
          <div>
            <div>
              犬1号
            </div>
            <button>午前</button>
            <button>午後</button>
          </div>
          <div>
            <div>
              犬2号
            </div>
            <button>午前</button>
            <button>午後</button>
          </div>
        </div>
      </div>
    </MiniDrawer>
  </>)
}

export default Home
