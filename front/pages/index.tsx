import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import {Button, ButtonProps, colors} from '@mui/material';
import { styled } from '@mui/system';

import MiniDrawer from '../components/MiniVariantDrawer'

import { NetworkStatus } from "@apollo/client";
import { useCreateFeedingsMutation, useFeedingCheckQuery } from '../lib/generated/client';
import Login from '../components/Login'

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
        <div> {zero_padding(props.date.getMonth()+1)}月 {zero_padding(props.date.getDate())}日 {WeekChars[props.date.getDay()]}</div>
        <div> {zero_padding(props.date.getHours())}:{zero_padding(props.date.getMinutes())}</div>
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
}));

const Home: NextPage = () => {
  const now = new Date();
  const end_datetime = `${now.getFullYear()}-${zero_padding(now.getMonth()+1)}-${zero_padding(now.getDate())}T15:00:00.000Z`;
	const yesterday = now;
	yesterday.setDate(now.getDate() -1);
	const start_datetime = `${yesterday.getFullYear()}-${zero_padding(yesterday.getMonth()+1)}-${zero_padding(yesterday.getDate())}T15:00:00.000Z`;

  const { loading, error, data, refetch, networkStatus } = useFeedingCheckQuery({
    variables: {
      "where": {
        "createAt_GTE": start_datetime,
        "createAt_LT": end_datetime,
      }
    },
    onError: (error) => {
      // console.log("onError");
      // console.log(error.networkError?.message);
      // console.log(error.networkError?.stack);
      // console.log(error.networkError?.);

    }
		// pollInterval: 200
	});
  const [ createFeedings, create_result ] = useCreateFeedingsMutation();

  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date())
    const timer = setInterval(async () => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  const [feeding_user_id, setFeedingUserId] = useState<string | null>(null);
  if (loading) return <div>ローディング中です</div>;
	if (error) {
    if (error.networkError) {
      const error_message = error.networkError.message;
      const split_message = error_message.split(" ");
      const code_string = split_message[split_message.length - 1];
      const code = Number(code_string);
      if (code == 401) {
        return (<div>
          <Login/>
        </div>)
      }
      return (<div>ネットワークエラー エラーコード: {"" + code}</div>)
    }
    return <div>Error! {error.message}</div>;
  }
	if (data == undefined) return <div>データを取得出来ませんでした。</div>

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
          {data.users.map((user: any)=>{
            return <GiverButton key={user.id} variant="contained" color={feeding_user_id == user.id ? "warning": "primary"} onClick={()=>{setFeedingUserId(user.id)}} >{user.name}</GiverButton>
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
              return(<div key={pet.id}>
                <div>
                  {pet.name}
                </div>
                <FeedingButton key={pet.id + "_am"} variant="contained" size="large" color="primary" disabled={(()=>{
                    for (const feeding of data.feedings) {
                      if (feeding.eater != null) {
                        if (feeding.eater.id == pet.id && feeding.am_pm == "am") { return true }
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
                      const res = await createFeedings({variables:{
                        "input": [
                          {
                            "am_pm": "am",
                            "giver": {
                              "connect": {
                                "where": {
                                  "node": {
                                    "id": feeding_user_id
                                  }
                                }
                              }
                            },
                            "eater": {
                              "connect": {
                                "where": {
                                  "node": {
                                    "id": pet.id
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }})
                      console.log(res);
                    } else {
                      alert("えさを与える人を選択してください")
                    }
                  }}>午前</FeedingButton>
                <FeedingButton key={pet.id + "_pm"} variant="contained" size="large" color="error" disabled={(()=>{
                    for (const feeding of data.feedings) {
                      if (feeding.eater != null) {
                        if (feeding.eater.id == pet.id && feeding.am_pm == "pm") { return true }
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
                      const res = await createFeedings({variables:{
                        "input": [
                          {
                            "am_pm": "pm",
                            "giver": {
                              "connect": {
                                "where": {
                                  "node": {
                                    "id": feeding_user_id
                                  }
                                }
                              }
                            },
                            "eater": {
                              "connect": {
                                "where": {
                                  "node": {
                                    "id": pet.id
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }})
                      console.log(res);
                    } else {
                      alert("えさを与える人を選択してください")
                    }
                  }}>午後</FeedingButton>
              </div>)
            })
          }
        </div>
      </div>
    </MiniDrawer>
  </>)
}

export default Home
