import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostItem from "./PostItem";
export default function PostList({ posts }) {
  return (
    <div className={styles.grid}>
      <Head>
        <title>Attai Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}