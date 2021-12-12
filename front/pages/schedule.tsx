import { flexbox } from '@mui/system';
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import Head from 'next/head'

import MiniDrawer from '../components/MiniVariantDrawer'
import { useCreateFeedingSchedulesMutation, useDeleteFeedingSchedulesMutation, useFeedingSchedulesQuery, useUpdateFeedingSchedulesMutation} from '../lib/generated/client'
import { styled } from '@mui/system';
import style  from '../styles/schedule.module.scss'
import Login from '../components/Login'

const WEEK_CHARS = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];

type FeedingScheduleForQuery = { __typename?: 'FeedingSchedule', id: string, am_pm: string, scheduledDate: any, scheduledGiver: { __typename?: 'User', id: string, name: string }, eater: { __typename?: 'Pet', id: string, name: string }, achievement?: { __typename?: 'Feeding', id: string } | null | undefined }
type Schedule = { date: Date, am_pm: string, schedule: FeedingScheduleForQuery[] }

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

const zero_padding_three = (num: number) =>{
  if (num < 10) {
		return "00" + num;
	} else if (num < 100) {
    return "0" + num;
  }
  return "" + num;
}

const get_date_string = (date: Date) =>{
  const tmp_date = new Date(date);
  tmp_date.setHours(tmp_date.getHours() - 9);
  return `${tmp_date.getFullYear()}-${zero_padding(tmp_date.getMonth()+1)}-${zero_padding(tmp_date.getDate())}`
}

const extract_date_stinrg = (date_stinrg: string) => {
  return date_stinrg.slice(0, 10)
}

const compare_date = (date: Date, date_string: string) => {
  return get_date_string(date) == extract_date_stinrg(date_string)
}

const to_datetime_string = (date: Date) => {
  return `${date.getUTCFullYear()}-${zero_padding(date.getUTCMonth()+1)}-${zero_padding(date.getUTCDate())}T${zero_padding(date.getUTCHours())}:${zero_padding(date.getUTCMinutes())}:${zero_padding(date.getUTCSeconds())}.${zero_padding_three(date.getUTCMilliseconds())}Z`
}

const Schedule: NextPage = () => {
  const now = new Date();
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	const start_datetime = `${yesterday.getFullYear()}-${zero_padding(yesterday.getMonth()+1)}-${zero_padding(yesterday.getDate())}T15:00:00.000Z`;
  const end_date = new Date()
  end_date.setDate(now.getDate()+ 14);
  const end_datetime = `${end_date.getFullYear()}-${zero_padding(end_date.getMonth()+1)}-${zero_padding(end_date.getDate())}T15:00:00.000Z`;

  const { loading, error, data, refetch, networkStatus } = useFeedingSchedulesQuery({
		pollInterval: 200,
    variables: {
      "where": {
        "scheduledDate_GTE": start_datetime,
        "scheduledDate_LT": end_datetime,
        "scheduledGiverAggregate": {
          "count_GTE": 1
        },
        "eaterAggregate": {
          "count_GTE": 1
        },
      }
    }
	});
  const [ createFeedingSchedules, create_result] = useCreateFeedingSchedulesMutation();
  const [ deleteFeedingSchedules, delete_result] = useDeleteFeedingSchedulesMutation();
  const [ updateFeedingSchedules, update_result] = useUpdateFeedingSchedulesMutation();

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
  console.log(data);


  const date = new Date();
  const schedule_list = [];
  for (let i=0; i<14; i++) {
    for (const this_am_pm of ['am', 'pm']) {
      const this_schedules: any[] = []
      data.feedingSchedules.map((feedingSchedule) => {
        const match_date = compare_date(date, feedingSchedule.scheduledDate);
        const match_am_pm = this_am_pm == feedingSchedule.am_pm;
        if ( match_date && match_am_pm) { this_schedules.push(feedingSchedule)}
      })
      schedule_list.push({
        date: new Date(date),
        am_pm: this_am_pm,
        schedule: this_schedules
      })
    }
    date.setDate(date.getDate() + 1);
  }
  console.log(schedule_list)

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
      <div className={style.ScheduleTable}>
        <div className={style.DateAmPmBlock}>
          <div className={style.DateAmPmTitleBlock}>
          </div>
          {
            data.users.map((user) =>{
              // ユーザー名
              return(<div className={style.UserName} key={user.id}>
                {user.name}
              </div>)
            })
          }
        </div>
        {
          schedule_list.map((schedule)=>{
            return(<div key={schedule.date.toString() + schedule.am_pm} className={style.DateAmPmBlock}>
              <div className={style.DateAmPmTitleBlock} >{schedule.date.getMonth()+1}月 {schedule.date.getDate()}日<br/>{schedule.am_pm}</div>
              {
                data.users.map((user) =>{
                  // そのブロックにえさやり予定が入っている場合
                  let match_feeding_schedule = false;
                  schedule.schedule.map((that_day_schedule)=>{
                    if (that_day_schedule.scheduledGiver != null) {
                      if (that_day_schedule.scheduledGiver.id == user.id) {match_feeding_schedule = true}
                    }
                  })
                  /**
                   * クリック時の動作
                   */
                  const click = async () => {
                    // 既にそのブロックが予定されているものだった場合
                    // スケジュールを削除する
                    if (match_feeding_schedule) {
                      console.log("スケジュール削除")
                      schedule.schedule.map((this_schedule) => {
                        deleteFeedingSchedules({variables:{
                          "where": {
                            "id": this_schedule.id
                          }
                        }})
                      })
                    } else {
                      if (schedule.schedule.length != 0) {
                        // ほかのユーザーがスケジュールを持っていた場合
                        console.log("スケジュール変更")
                        schedule.schedule.map(async (this_schedule) => {
                          console.log("ミューテーション")
                          console.log(this_schedule.id)
                          console.log(user.name)
                          console.log(user.id)
                          await updateFeedingSchedules({variables: {
                            "where": {
                              "id": this_schedule.id
                            },
                            "update": {
                              "scheduledGiver": {
                                "disconnect": {
                                  "where": {
                                    "node": {
                                      "id": this_schedule.scheduledGiver.id
                                    }
                                  }
                                },
                                "connect": {
                                  "where": {
                                    "node": {
                                      "id": user.id
                                    }
                                  }
                                }
                              }
                            }
                          }
                        })
                          refetch()
                          console.log(update_result)
                        })
                      } else {
                        // ほかのユーザーもスケジュールを持っていなかった場合
                        console.log("スケジュール作成")
                        // ペット分のスケジュールを生成する
                        data.pets.map((pet)=>{
                          createFeedingSchedules({variables:{
                            "input": [
                              {
                                "am_pm": schedule.am_pm,
                                "scheduledDate": to_datetime_string(schedule.date),
                                "scheduledGiver": {
                                  "connect": {
                                    "where": {
                                      "node": {
                                        "id": user.id
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
                        })
                      }
                    }
                  }


                  return(<div key={schedule.date.toString() + schedule.am_pm +user.id} className={style.ScheduleBlock} onClick={click} >
                    {match_feeding_schedule?<div className={style.FeedingScheduleBlock}></div>:<></>}
                    </div>)
                })
              }
              </div>) 
          })
        }
      </div>
    </MiniDrawer>
  </>)
}
export default Schedule