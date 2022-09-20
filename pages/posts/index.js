import Link from "next/link";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/PostList";
const Posts = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>All Posts</h3>
      <div className={styles.main}>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
