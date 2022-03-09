import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useUser } from "../utils/auth";

export default function Home() {

  const user = useUser();
  const router = useRouter();

  if (user !== null) {
    router.push('/mypage');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Example</title>
      </Head>

      <div>
        <h1>Auth Example</h1>
        <Link href="/register">
          <button>登録</button>
        </Link>
        <Link href="/login">
          <button>ログイン</button>
        </Link>
      </div>
    </div>
  );
}
