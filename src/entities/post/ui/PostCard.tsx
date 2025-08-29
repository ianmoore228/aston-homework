import styles from "./PostCard.module.css";

interface PostCardProps {
    title: string;
    body: string;
    userId: number;
  }
  
  export const PostCard = ({ title, body, userId }: PostCardProps) => {
    return (
      <div className={styles.postCard}>
        <div className={styles.postCardHeader}><p className={styles.postCardUserId}>ID пользователя:{userId}</p><h2 className={styles.postCardTitle}>{title}</h2></div>
        <hr />
        <p className={styles.postCardBody}>{body}</p>
      </div>
    );
  };
  