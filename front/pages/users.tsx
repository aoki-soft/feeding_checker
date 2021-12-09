import type { NextPage } from 'next'
import { Fragment, useState } from 'react';
import Head from 'next/head'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useCreateUsersMutation, useDeleteUsersMutation, useUpdateUsersMutation, useUsersQuery } from '../lib/generated/client';

import MiniDrawer from '../components/MiniVariantDrawer'
import { NetworkStatus } from "@apollo/client";

const Users: NextPage = () => {
	const { loading, error, data, refetch, networkStatus } = useUsersQuery({
		pollInterval: 200
	})

	const [createUsers, create_result ] = useCreateUsersMutation();
	const [deleteUsers, delte_reult ] = useDeleteUsersMutation();
	const [updateUsers, update_result ] = useUpdateUsersMutation();

	const [new_user_name, setNewUserName] = useState("");
	const [rename_user_id, setRenameUserId] = useState<string | null>(null);
	const [rename_name, setRenameName] = useState("");

	if (loading) return <div>ローディング中です</div>;
	if (error) return <div>`Error! ${error.message}`</div>;
	if (data == undefined) return <div>データを取得出来ませんでした。</div>

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
			ユーザー追加<br/>
			<TextField id="outlined-basic" label="名前" variant="outlined" onChange={(e)=>{setNewUserName(e.target.value)}} />
			<Button variant="outlined" onClick={async ()=>{
				console.log(new_user_name);
				if (new_user_name == "") {
					alert("名前が未入力です。")
				} else {
					const res = await createUsers({ variables: { "input": [{"name": new_user_name }]}})
					console.log(res);
					alert("新しいユーザーを追加しました。")
				}
			}}>登録</Button>

			<List sx={{ width: "100%", maxWidth: 360, bgcolor: 'background.paper'}}>
				{
					data.users.map((user)=>{
						return (
							<ListItem alignItems="flex-start" key={user.name}>
							<ListItemText
								primary={user.name}
								secondary={
									<Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											えさやり回数{user.feedingAggregate !=null? user.feedingAggregate.count: 0}回
										</Typography>
										<Button color="primary" variant="contained" size="small" sx={{margin: "10px"}} onClick={async ()=>{
											setRenameUserId(user.id)
										}}>名前変更</Button>
										<Button color="error" variant="contained" size="small" sx={{margin: "10px"}} onClick={async ()=>{
											const res = await deleteUsers({variables:{"where": {"id": user.id}}})
											console.log(res);
											alert("ユーザーを削除しました")
										}}>削除</Button>
									</Fragment>
								}
								/>
							</ListItem>
						)
					})
				}
			</List>
			<Dialog open={rename_user_id != null} onClose={()=>{setRenameUserId(null)}}>
        <DialogTitle>名前変更</DialogTitle>
        <DialogContent>
          <DialogContentText>
						新しい名前を入力してください
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="名前"
            type="text"
            fullWidth
            variant="standard"
						onChange={(e)=>{setRenameName(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setRenameUserId(null)}}>Cancel</Button>
          <Button onClick={async ()=>{
						if (rename_user_id != null) {
							const res = await updateUsers({variables:{
								"where": {
									"id": rename_user_id
								},
								"update": {
									"name": rename_name
								}
							}})
							console.log(res);
						}
						setRenameUserId(null)
					}}>Rename</Button>
        </DialogActions>
      </Dialog>
		</MiniDrawer>
	</>)
}

export default Users;