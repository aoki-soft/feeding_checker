import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import MiniDrawer from '../components/MiniVariantDrawer'
import { get_users } from '../components/graphql/get_users'

const Users: NextPage = () => {
	const [now_loading, setNowLoading] = useState(true);
	const [users, setUsers] = useState([]);

  useEffect(() => {
		(async ()=>{
			const res = await get_users();
			console.log(res["data"]["users"]);
			setUsers(res["data"]["users"]);
			setNowLoading(false);
		})()
	}, [])

	return (<>
		<Head>
      <title>ユーザー管理 / えさやりチェッカー</title>
      <link rel="icon" href="/dog_food.svg" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
		<MiniDrawer>
			{
				now_loading? <>ローディング中です</>:<>
				ユーザー管理画面<br/>
			ユーザー追加<br/>
			<List sx={{ width: "100%", maxWidth: 360, bgcolor: 'background.paper'}}>
				{
					users.map((user)=>{
						return (
							<ListItem alignItems="flex-start" key={user["name"]}>
							<ListItemText
								primary={user["name"]}
								secondary={
									<Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											{`えさやり回数 ${user["feedingAggregate"]["count"]}回`}
										</Typography>
										<Button color="primary" variant="contained" size="small" sx={{margin: "10px"}}>名前変更</Button>
										<Button color="error" variant="contained" size="small" sx={{margin: "10px"}}>削除</Button>
									</Fragment>
								}
								/>
							</ListItem>
						)
					})
				}
			</List>
			</>}
		</MiniDrawer>
	</>)
}

export default Users;