import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/C4E03AQE2AmnSI0hM0Q/profile-displayphoto-shrink_800_800/0/1632096337874?e=1705536000&v=beta&t=59WfAAJyMzunXUg994zXDNoqd3CtWA7Zq6lqL059KQY"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcela Rocha</strong>
              <time title="11 de maio às 08h13" dateTime="2022-05-11 08:13:38">
                cerca de 1h atrás
              </time>
            </div>
            <button title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Applause<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
