import { useRouter } from 'next/router'
import { useState } from "react";
import { login, useUser } from "../utils/auth"

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter()
  const user = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword).catch((error) => alert(error));
  };

  if (user !== null) {
    router.push('/mypage');
  };

  return (
    <>
      <h1>ログインページ</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button>ログイン</button>
      </form>
    </>
  );
};

export default Login;