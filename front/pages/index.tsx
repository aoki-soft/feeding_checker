import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import {Button, ButtonProps, colors} from '@mui/material';
import { styled } from '@mui/system';

import MiniDrawer from '../components/MiniVariantDrawer'

import { create_feeding } from '../components/graphql/create_feeding'

import {
	useQuery,
	NetworkStatus,
	gql,
} from "@apollo/client";

const GET_USER_PETS_FEEDING = gql`
  query Query($where: FeedingWhere) {
  pets {
    id
    name
  }
  users {
    id
    name
  }
  feedings(where: $where) {
    id
    am_pm
    createAt
    updateAt
    giver {
      id
      name
    }
    eater {
      id
      name
    }
  }
}
`


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

/**
 * 1桁の数値を0でパディングする
 * @param num 2桁以下の数値
 */
const zero_padding = (num: number) => {
	if (num < 10) {
		return "0" + num;
	}
	return "" + num;
}

const Home: NextPage = () => {
  const now = new Date();
  const end_datetime = `${now.getFullYear()}-${zero_padding(now.getMonth()+1)}-${zero_padding(now.getDate())}T15:00:00.000Z`;
	const yesterday = now;
	yesterday.setTime(now.getTime() -86400000);
	const start_datetime = `${yesterday.getFullYear()}-${zero_padding(yesterday.getMonth()+1)}-${zero_padding(yesterday.getDate())}T15:00:00.000Z`;

  const { loading, error, data, refetch, networkStatus } = useQuery(GET_USER_PETS_FEEDING,{
    variables: {
      "where": {
        "createAt_GTE": start_datetime,
        "createAt_LT": end_datetime,
      }
    },
		pollInterval: 500
	});

  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date())
    setInterval(async () => {
      setDate(new Date())
    }, 1000)
  }, [])

  const [feeding_user_id, setFeedingUserId] = useState<String | null>(null);

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
        loading?
        <div>ローディング中です</div>
        :<>
          <Clock date={date} />
          <div>
            <div>
              えさをあげる人
            </div>
            <div>
              {data.users.map((user: any)=>{
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
                data.pets.map((pet: any)=>{
                  return(<>
                    <div>
                      {pet["name"]}
                    </div>
                    <FeedingButton key={pet["id"] + "_am"} variant="contained" size="large" color="primary" disabled={(()=>{
                        for (const feeding of data.feedings) {
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
                        for (const feeding of data.feedings) {
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
