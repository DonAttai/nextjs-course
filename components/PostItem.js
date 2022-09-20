import styles from "../styles/Home.module.css";
import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <Link href={`posts/${post.id}`}>
      <div className={styles.card}>
        <h2>{post.title}</h2>
        <p key={post.id}>{post.body}</p>
      </div>
    </Link>
  );
};

export default PostItem;
