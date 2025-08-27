import "./PostCard.css";

interface PostCardProps {
    title: string;
    body: string;
    userId: number;
  }
  
  export const PostCard = ({ title, body, userId }: PostCardProps) => {
    return (
      <div className="post-card">
        <div className="post-card__header"><p className="post-card__userId">ID пользователя:{userId}</p><h2 className="post-card__title">{title}</h2></div>
        <hr />
        <p className="post-card__body">{body}</p>
      </div>
    );
  };
  