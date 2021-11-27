import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Button from '@mui/material/Button';

import MiniDrawer from '../components/MiniVariantDrawer'

import { today_feeding } from '../components/graphql/today_feeding'
import { create_feeding } from '../components/graphql/create_feeding'

type ClockProps = {
  date: Date|null;
}

function Clock(props: ClockProps) {
  return (<>
    {
      props.date == null?
      <></>:
      <>
        <div> {props.date.getMonth()}月 {props.date.getDate()}日</div>
        <div> {props.date.getHours()}:{props.date.getMinutes()}:{props.date.getSeconds()}</div>
      </>
    }
  </>)
}

const Home: NextPage = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date())
    setInterval(async () => {
      setDate(new Date())
    }, 1000)
  }, [])

  const [dog1_am_eated, setDog1AmEated] = useState(false);
  const [dog1_pm_eated, setDog1PmEated] = useState(false);
  const [dog2_am_eated, setDog2AmEated] = useState(false);
  const [dog2_pm_eated, setDog2PmEated] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await today_feeding();
      const feedings = response["data"]["feedings"];
      const feedings_length = feedings.length;
      for (let i=0; i<feedings_length; i++) {
        if (feedings[i]["eater"]["name"] === "1号") {
          if (feedings[i]["am_pm"] === "am") {
            setDog1AmEated(true);
          } else if(feedings[i]["am_pm"] === "pm") {
            setDog1PmEated(true);
          }
        } else if (feedings[i]["eater"]["name"] === "2号") {
          if (feedings[i]["am_pm"] === "am") {
            setDog2AmEated(true);
          } else if(feedings[i]["am_pm"] === "pm") {
            setDog2PmEated(true);
          }
        }
      }
    })();

    setInterval(async () => {
      const response = await today_feeding();
      const feedings = response["data"]["feedings"];
      console.log(feedings);
      console.log(feedings.length);
      const feedings_length = feedings.length;
      for (let i=0; i<feedings_length; i++) {
        if (feedings[i]["eater"]["name"] === "1号") {
          if (feedings[i]["am_pm"] === "am") {
            setDog1AmEated(true);
          } else if(feedings[i]["am_pm"] === "pm") {
            setDog1PmEated(true);
          }
        } else if (feedings[i]["eater"]["name"] === "2号") {
          if (feedings[i]["am_pm"] === "am") {
            setDog2AmEated(true);
          } else if(feedings[i]["am_pm"] === "pm") {
            setDog2PmEated(true);
          }
        }
      }

    }, 5000)
  }, [])

  const set_feed = async () => {
    alert("登録を開始します")
    // const res = await create_feeding();
    // console.log(res);
    alert("登録しました")
  }

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
      <Clock date={date} />
      
      <div>
        <div>
          えさをあげる人
        </div>
        <div>
          <Button variant="contained" color="warning">ぷっちょ</Button>
          <Button variant="contained" color="inherit">ぷっちょ</Button>
          <Button variant="contained" disabled>ぷっちょ</Button>
          <Button variant="contained">ぷっちょ</Button>
          <Button variant="contained">ぷっちょ</Button>
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
            {
              dog1_am_eated ? 
              <Button variant="contained" size="large" color="primary" disabled>午前</Button>
              :<Button variant="contained" size="large" color="primary" onClick={()=>{setDog1AmEated(true)}}>午前</Button>
            }
            {
              dog1_pm_eated ?
              <Button variant="contained" size="large" color="error" disabled>午後</Button>
              :<Button variant="contained" size="large" color="error" onClick={()=>{setDog1PmEated(true)}}>午後</Button>
            }
          </div>
          <div>
            <div>
              犬2号
            </div>
            {
              dog2_am_eated ? 
              <Button variant="contained" size="large" color="primary" disabled>午前</Button>
              :<Button variant="contained" size="large" color="primary" onClick={()=>{setDog2AmEated(true)}}>午前</Button>
            }
            {
              dog2_pm_eated ?
              <Button variant="contained" size="large" color="error" disabled>午後</Button>
              :<Button variant="contained" size="large" color="error" onClick={()=>{setDog2PmEated(true)}}>午後</Button>
            }
          </div>
        </div>
      </div>
    </MiniDrawer>
  </>)
}

export default Home
