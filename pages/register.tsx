/* Register.js */

import React, { useState } from "react";
import { register } from "../utils/auth";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    register(registerEmail, registerPassword);
  };

  return (
    <>
      <h1>新規登録</h1>
      {/* ↓「onSubmit」を追加 */}
      <form onSubmit={handleRegister}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button>登録する</button>
      </form>
    </>
  );
};

export default Register;