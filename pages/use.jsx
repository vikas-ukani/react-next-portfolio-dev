import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Use() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Use me Page</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/" as={process.env.LINK + "/"}>
          <a href="">Back to Home</a>
        </Link>
      </main>
    </div>
  );
}
