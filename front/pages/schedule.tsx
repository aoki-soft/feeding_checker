import { flexbox } from '@mui/system';
import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

import MiniDrawer from '../components/MiniVariantDrawer'
import { useFeedingScheduleQuery } from '../lib/generated/client'

const WEEK_CHARS = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];

const Schedule: NextPage = () => {
  const { loading, error, data, refetch, networkStatus } = useFeedingScheduleQuery({
		pollInterval: 500
	});

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
                            <Button variant="contained" size="large" color="primary" sx={{
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