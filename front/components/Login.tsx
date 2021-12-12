import { useContext, useState } from "react";
import { LoginContext } from "../pages/_app";

export default () => {
  const [pass_input, setPassInput] = useState("");
  const login = useContext(LoginContext);
	const click_login = ()=>{
    login(pass_input);
	}

  return (<div>
    <div>
      パスワードが誤っています
      <br/>
      パスワードを入力してください<br/>
      <input value={pass_input} onChange={(event)=>{setPassInput(event.target.value)}}/>
      <button onClick={click_login}>ログイン</button>
    </div>
  </div>)
}