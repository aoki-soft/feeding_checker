import type { NextPage } from 'next'
import { Fragment, useState } from 'react';
import Head from 'next/head'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import MiniDrawer from '../components/MiniVariantDrawer'

import { NetworkStatus } from "@apollo/client";
import { useCreatePetsMutation, useDeletePetsMutation, usePetsQuery, useUpdatePetsMutation } from '../lib/generated/client';

const Pets: NextPage = () => {
	const { loading, error, data, refetch, networkStatus } = usePetsQuery({
		pollInterval: 500
	});
	const [createPet, create_result ] = useCreatePetsMutation();
	const [deletePet, delete_reult ] = useDeletePetsMutation();
	const [updatePet, update_result ] = useUpdatePetsMutation();

	const [new_pet_name, setNewPetName] = useState("");
	const [rename_pet_id, setRenamePetId] = useState<string | null>(null);
	const [rename_name, setRenameName] = useState("");

	if (loading) return <div>ローディング中です</div>;
	if (error) return <div>`Error! ${error.message}`</div>;
	if (data == undefined) return <div>データを取得出来ませんでした。</div>

	return (<>
		<Head>
			<title>ペット管理画面/ えさやりチェッカー</title>
      <link rel="icon" href="/dog_food.svg" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
		<MiniDrawer>
			ペット追加<br/>
			<TextField id="outlined-basic" label="名前" variant="outlined" onChange={(e)=>{setNewPetName(e.target.value)}} />
			<Button variant="outlined" onClick={async ()=>{
				console.log(new_pet_name);
				if (new_pet_name == "") {
					alert("名前が未入力です。")
				} else {
					const res = await createPet({ variables: { "input": [{"name": new_pet_name }]}})
					console.log(res);
					alert("新しいペットを追加しました。")
				}
			}}>登録</Button>

			<List sx={{ width: "100%", maxWidth: 360, bgcolor: 'background.paper'}}>
				{
					data.pets.map((pet: any)=>{
						return (
							<ListItem alignItems="flex-start" key={pet.name}>
							<ListItemText
								primary={pet.name}
								secondary={
									<Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											{`えさを食べた回数 ${pet["eatingAggregate"]["count"]}回`}
										</Typography>
										<Button color="primary" variant="contained" size="small" sx={{margin: "10px"}} onClick={async ()=>{
											setRenamePetId(pet.id)
										}}>名前変更</Button>
										<Button color="error" variant="contained" size="small" sx={{margin: "10px"}} onClick={async ()=>{
											const res = await deletePet({variables:{"where": {"id": pet.id}}});
											console.log(res);
											alert("ペットを削除しました")
										}}>削除</Button>
									</Fragment>
								}
								/>
							</ListItem>
						)
					})
				}
			</List>
			<Dialog open={rename_pet_id != null} onClose={()=>{setRenamePetId(null)}}>
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
          <Button onClick={()=>{setRenamePetId(null)}}>Cancel</Button>
          <Button onClick={async ()=>{
						if (rename_pet_id != null) {
							const res = await updatePet({variables: {
								"where": {
									"id": rename_pet_id
								},
								"update": {
									"name": rename_name
								}
							}})
							console.log(res);
						}
						setRenamePetId(null)
					}}>Rename</Button>
        </DialogActions>
      </Dialog>
		</MiniDrawer>
	</>)
}

export default Pets;