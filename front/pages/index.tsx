import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import {Button, ButtonProps, colors} from '@mui/material';
import { styled } from '@mui/system';

import MiniDrawer from '../components/MiniVariantDrawer'

import { today_feeding } from '../components/graphql/today_feeding'
import { create_feeding } from '../components/graphql/create_feeding'
import { get_users } from '../components/graphql/get_users'
import { get_pets } from '../components/graphql/pets/get_pets'

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

  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date())
    setInterval(async () => {
      setDate(new Date())
    }, 1000)
  }, [])

  const [feeding_user_id, setFeedingUserId] = useState<String | null>(null);
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([])
  const [today_feedings, setTodayFeedings] = useState([])

  const fetch_status = async () => {
    const response = await today_feeding(new Date());
    console.log(response["data"]["feedings"]);
    setTodayFeedings(response["data"]["feedings"])
    const res = await get_users();
    setUsers(res["data"]["users"]);
    const res_pets = await get_pets();
    setPets(res_pets["data"]["pets"]);
  }

  useEffect(() => {
    fetch_status();
    setNowLoading(false);
    setInterval(fetch_status, 500)
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
                return <GiverButton key={user["id"]} variant="contained" color={feeding_user_id == user["id"] ? "warning": "primary"} onClick={()=>{setFeedingUserId(user["id"])}} >{user["name"]}</GiverButton>
              })}    
            </div>
          </div>
          <div>
            <div>
              えさを与えたら押す
            </div>
            <div>
              {
                pets.map((pet)=>{
                  return(<>
                    <div>
                      {pet["name"]}
                    </div>
                    <FeedingButton key={pet["id"] + "_am"} variant="contained" size="large" color="primary" disabled={(()=>{
                        for (const feeding of today_feedings) {
                          if (feeding["eater"] != null) {
                            if (feeding["eater"]["id"] == pet["id"] && feeding["am_pm"] == "am") { return true }
                          }
                        }
                        return false
                      })()} 
                      sx={{
                        backgroundColor: colors.blue[300],
                        '&:hover': {
                          backgroundColor: colors.blue[400],
                        }
                      }}
                      onClick={async ()=>{
                        if (feeding_user_id != null) {
                          const res = await create_feeding(feeding_user_id, pet["id"], "am");
                          console.log(res);
                        } else {
                          alert("えさを与える人を選択してください")
                        }
                      }}>午前</FeedingButton>
                    <FeedingButton key={pet["id"] + "_pm"} variant="contained" size="large" color="error" disabled={(()=>{
                        for (const feeding of today_feedings) {
                          if (feeding["eater"] != null) {
                            if (feeding["eater"]["id"] == pet["id"] && feeding["am_pm"] == "pm") { return true }
                          }
                        }
                        return false
                      })()} 
                      sx={{
                        backgroundColor: colors.orange[600],
                        '&:hover': {
                          backgroundColor: colors.orange[700],
                        }
                      }}
                      onClick={async ()=>{
                        if (feeding_user_id != null) {
                          const res = await create_feeding(feeding_user_id, pet["id"], "pm");
                          console.log(res);
                        } else {
                          alert("えさを与える人を選択してください")
                        }
                      }}>午後</FeedingButton>
                  </>)
                })
              }
            </div>
          </div>
        </>
      }
    </MiniDrawer>
  </>)
}

export default Home
