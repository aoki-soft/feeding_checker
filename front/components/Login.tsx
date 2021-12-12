import { useContext, useState } from "react";
import { LoginContext } from "../pages/_app";
import Head from "next/head";

export default () => {
  const [pass_input, setPassInput] = useState("");
  const login = useContext(LoginContext);
	const click_login = ()=>{
    login(pass_input);
	}

  return (<div>
    <Head>
      <title>ログイン / えさやりチェッカー</title>
      <link rel="icon" href="/dog_food.svg" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <div>
      パスワードが誤っています
      <br/>
      パスワードを入力してください<br/>
      <input value={pass_input} onChange={(event)=>{setPassInput(event.target.value)}}/>
      <button onClick={click_login}>ログイン</button>
    </div>
  </div>)
}