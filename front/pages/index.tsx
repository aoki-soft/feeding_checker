import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import {Button, ButtonProps, colors} from '@mui/material';
import { styled } from '@mui/system';

import MiniDrawer from '../components/MiniVariantDrawer'

import { today_feeding } from '../components/graphql/today_feeding'
import { create_feeding } from '../components/graphql/create_feeding'
import { get_users } from '../components/graphql/get_users'

type ClockProps = {
  date: Date|null;
}

function Clock(props: ClockProps) {
  const WeekChars = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];

  return (<>
    {
      props.date == null?
      <></>:
      <>
        <div> {props.date.getMonth()+1}月 {props.date.getDate()}日 {WeekChars[props.date.getDay()]}</div>
        <div> {props.date.getHours()}:{props.date.getMinutes()}</div>
      </>
    }
  </>)
}

const FeedingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '30vw',
  height: '80px',
  margin: '10px',
  fontSize: '2em',
  color: 'white',
  backgroundColor: colors.blue[300],
  '&:hover': {
    backgroundColor: colors.blue[400],
  },
}));

const GiverButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '30vw',
  height: '80px',
  margin: '10px',
  fontSize: '1.3em',
  // color: 'white',
  // backgroundColor: colors.blue[300],
  // '&:hover': {
  //   backgroundColor: colors.blue[400],
  // },
}));

const Home: NextPage = () => {
  const [now_loading, setNowLoading] = useState(true);
  setTimeout(()=>{
    setNowLoading(false);
  }, 500)

  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date())
    setInterval(async () => {
      setDate(new Date())
    }, 1000)
  }, [])

  const [feeding_user_id, setFeedingUserId] = useState<String | null>(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await get_users();
      setUsers(res["data"]["users"]);
    })()
  })


  const [dog1_am_eated, setDog1AmEated] = useState(false);
  const [dog1_pm_eated, setDog1PmEated] = useState(false);
  const [dog2_am_eated, setDog2AmEated] = useState(false);
  const [dog2_pm_eated, setDog2PmEated] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await today_feeding(new Date());
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
      const response = await today_feeding(new Date());
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
      const res = await get_users();
      setUsers(res["data"]["users"]);
    }, 500)
  }, [])

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
      {
        now_loading?
        <div>ローディング中です</div>
        :<>
          <Clock date={date} />
          <div>
            <div>
              えさをあげる人
            </div>
            <div>
              {users.map((user)=>{
                return <GiverButton variant="contained" color={feeding_user_id == user["id"] ? "warning": "primary"} onClick={()=>{setFeedingUserId(user["id"])}} >{user["name"]}</GiverButton>
              })}    
            </div>
          </div>
          <div>
            <div>
              えさを与えたら押す
            </div>
            <div>
              <div>
                <div>
                  犬1号
                </div>
                <FeedingButton variant="contained" size="large" color="primary" disabled={dog1_am_eated} sx={{
                  backgroundColor: colors.blue[300],
                  '&:hover': {
                    backgroundColor: colors.blue[400],
                  }
                }}
                  onClick={async ()=>{
                    if (feeding_user_id != null) {
                      setDog1AmEated(true)
                      const res = await create_feeding(feeding_user_id, "1号", "am");
                      console.log(res);
                    } else {
                      alert("えさを与える人を選択してください")
                    }
                  }}>午前</FeedingButton>
                <FeedingButton variant="contained" size="large" color="error" disabled={dog1_pm_eated} sx={{
                    backgroundColor: colors.orange[600],
                    '&:hover': {
                      backgroundColor: colors.orange[700],
                    }
                  }}
                  onClick={async ()=>{
                    if (feeding_user_id != null) {
                      setDog1PmEated(true)
                      const res = await create_feeding(feeding_user_id, "1号", "pm");
                      console.log(res);
                    } else {
                      alert("えさを与える人を選択してください")
                    }
                  }}>午後</FeedingButton>
              </div>
              <div>
                <div>
                  犬2号
                </div>
                <FeedingButton variant="contained" size="large" color="primary" disabled={dog2_am_eated} sx={{
                  backgroundColor: colors.blue[300],
                  '&:hover': {
                    backgroundColor: colors.blue[400],
                  }
                }}
                  onClick={async ()=>{
                    if (feeding_user_id != null) {
                      setDog2AmEated(true)
                      const res = await create_feeding(feeding_user_id, "2号", "am");
                      console.log(res);
                    } else {
                      alert("えさを与える人を選択してください")
                    }
                }}>午前</FeedingButton>
                <FeedingButton variant="contained" size="large" color="error" disabled={dog2_pm_eated} sx={{
                    backgroundColor: colors.orange[600],
                    '&:hover': {
                      backgroundColor: colors.orange[700],
                    }
                  }}
                  onClick={async ()=>{
                    if (feeding_user_id != null) {
                      setDog2PmEated(true)
                      const res = await create_feeding(feeding_user_id, "2号", "pm");
                      console.log(res);
                    } else {
                      alert("えさを与える人を選択してください")
                    }
                  }
                  }>午後</FeedingButton>

              </div>
            </div>
          </div>
        </>
      }
    </MiniDrawer>
  </>)
}

export default Home
