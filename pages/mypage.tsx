import Link from 'next/link'
import { useRouter } from 'next/router'
import { logout, useUser } from "../utils/auth"

const Mypage = () => {
  const user = useUser();
  const router = useRouter();

  if (user == null) {
    router.push('/');
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };

  return (
    <>
      <h1>マイページ</h1>
      <p>{user?.email}</p>
      <Link href="/edit">
        <button>会員情報更新</button>
      </Link>
      <button onClick={handleLogout}>ログアウト</button>
    </>
  );
};

export default Mypage;