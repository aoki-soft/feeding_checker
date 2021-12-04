import { flexbox } from '@mui/system';
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

import MiniDrawer from '../components/MiniVariantDrawer'
import { useFeedingScheduleQuery } from '../lib/generated/client'
import { tmpdir } from 'os';

const WEEK_CHARS = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];

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

const Schedule: NextPage = () => {
  const now = new Date();
	const yesterday = new Date(now);
	yesterday.setHours(now.getHours() - 9);
	const start_datetime = `${yesterday.getFullYear()}-${zero_padding(yesterday.getMonth()+1)}-${zero_padding(yesterday.getDate())}T15:00:00.000Z`;
  const end_date = new Date()
  end_date.setDate(now.getDate()+ 14);
  const end_datetime = `${end_date.getFullYear()}-${zero_padding(end_date.getMonth()+1)}-${zero_padding(end_date.getDate())}T15:00:00.000Z`;

  const { loading, error, data, refetch, networkStatus } = useFeedingScheduleQuery({
		pollInterval: 500,
    variables: {
      "where": {
        "scheduledDate_GTE": start_datetime,
        "scheduledDate_LT": end_datetime
      }
    }
	});

  const get_date_string = (date: Date) =>{
    const tmp_date = new Date(date);
    tmp_date.setHours(tmp_date.getHours() - 9);
    return `${tmp_date.getFullYear()}-${zero_padding(tmp_date.getMonth()+1)}-${zero_padding(tmp_date.getDate())}`
  }

  const extract_date_stinrg = (date_stinrg: string) => {
    return date_stinrg.slice(0, 10)
  }

  const [date_list, setDateList ]= useState<Date[]>([]);
  
  useEffect(() => {
    const date = new Date();
    const new_date_list = [];
    for (let i=0; i<14; i++) {
      new_date_list.push(new Date(date))
      date.setDate(date.getDate()+1);
    }
    setDateList(new_date_list);
  }, [])

  if (loading) return <div>ローディング中です</div>;
	if (error) return <div>`Error! ${error.message}`</div>;
	if (data == undefined) return <div>データを取得出来ませんでした。</div>
  console.log(data);

  return (<>
    <MiniDrawer>
      スケジュール
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '70vh',
        width: 'auto',
        marginRight: 30,
        backgroundColor: 'gray'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: 100,
          margin: 5,         
        }}>
          <div style={{
            height: 100,
            margin: 5,
          }}>
          </div>
          {
            data.users.map((user)=>{
              return (<div key={user.id} style={{
                margin: 5,
                color: 'white',
                height: 100,
              }}>
                {user.name}
              </div>)
            })
          }
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: 15,
            marginTop: 5,
            marginBottom: 5,
            width: '100%',
            overflow: 'scroll',
          }}>
          {
            date_list.map((date)=>{
              return (
              <div style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
                {
                  [["am", "午前"], ["pm", "午後"]].map((am_pm)=>{
                    return (
                      <div style={{
                        margin: 5,
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        borderColor: 'black',
                        borderStyle: 'solid',
                      }}>
                        <div style={{
                        height: 95,
                        width: 75,
                        margin: 5,
                        }}>
                        {date.getMonth()+1}/{date.getDate()}<br/>{WEEK_CHARS[date.getDay()]}<br/>{am_pm[1]}
                        </div>
                        {
                          data.users.map((user)=>{
                            return (
                            <Button variant="contained" size="large" color={
                              (()=>{
                                for (const schedule of data.feedingSchedules) {
                                  const formated_date = get_date_string(date);
                                  const scheduled_date = extract_date_stinrg(schedule.scheduledDate);
                                  if (scheduled_date == formated_date && schedule.am_pm == am_pm[0] && schedule.scheduledGiver.id == user.id) {
                                    return true;
                                  }
                                }
                                return false;
                              })()? "warning": "primary"
                            }
                            sx={{
                              height: 100,
                              margin: 1,
                            }}>
                              
                            </Button>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>)
            })
          }
        </div>
      </div>
    </MiniDrawer>
  </>)
}
export default Schedule; 