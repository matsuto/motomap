import React, { useState } from "react";
import { useRouter } from 'next/router'
import { useUser } from "../utils/auth";
import { getUser, updateUser } from "../utils/db/user";

const Edit = () => {
  const router = useRouter();
  const user = useUser();
  const userInfo = getUser(user);
  const [editLastName, setEditLastName] = useState(userInfo['lastName']);
  const [editFirstName, setEditFirstName] = useState(userInfo['firstName']);
  const [editLastNameKana, setEditLastNameKana] = useState(userInfo['lastNameKana']);
  const [editFirstNameKana, setEditFirstNameKana] = useState(userInfo['firstNameKana']);
  const [editPref, setEditPref] = useState(userInfo['pref']);
  const [editBirthday, setEditBirthday] = useState(userInfo['birthday']);


  const handleEditUser = async (e) => {
    e.preventDefault();
    updateUser(user, editFirstName, editLastName, editFirstNameKana, editLastNameKana, editPref, editBirthday);
    router.push('/mypage')
  };

  return (
    <>
      <h1>会員情報修正</h1>
      <form onSubmit={handleEditUser}>
        <div>
          <label>名字</label>
          <input
            name="lastName"
            type="name"
            value={editLastName}
            onChange={(e) => setEditLastName(e.target.value)}
          />
        </div>
        <div>
          <label>名前</label>
          <input
            name="firstName"
            type="name"
            value={editFirstName}
            onChange={(e) => setEditFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>名字カナ</label>
          <input
            name="lastNameKana"
            type="name"
            value={editLastNameKana}
            onChange={(e) => setEditLastNameKana(e.target.value)}
          />
        </div>
        <div>
          <label>名前カナ</label>
          <input
            name="firstNameKana"
            type="name"
            value={editFirstNameKana}
            onChange={(e) => setEditFirstNameKana(e.target.value)}
          />
        </div>
        <div>
          <label>都道府県</label>
          <input
            name="pref"
            type="string"
            value={editPref}
            onChange={(e) => setEditPref(e.target.value)}
          />
        </div>
        <div>
          <label>誕生日</label>
          <input
            name="birthday"
            type="date"
            value={editBirthday}
            onChange={(e) => setEditBirthday(e.target.value)}
          />
        </div>
        <button>登録する</button>
      </form>
    </>
  );
};

export default Edit;