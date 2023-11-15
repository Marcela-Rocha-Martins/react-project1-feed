import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";


export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d LLLL 'at' HH:mm' h'");
  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });
  const [comments, setComments] = useState([1, 2, 3]);


  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((aContent) => {
          if (aContent.type === "paragraph") {
            return <p>{aContent.content}</p>;
          } else if (aContent.type === "link") {
            return (
              <p>
                <a href="">{aContent.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Leave a comment here"></textarea>

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div ClassName={styles.commentList}>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
