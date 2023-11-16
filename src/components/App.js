import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Post } from "./Post.jsx";

import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/C4E03AQE2AmnSI0hM0Q/profile-displayphoto-shrink_400_400/0/1632096337874?e=1705536000&v=beta&t=l7AixMgnXItY48lN17Z54yhINjRT3H_9A3ZONYtJ5oA",
      name: "Marcela Rocha",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hello everyone! 👋" },
      {
        type: "paragraph",
        content:
          "Just uploaded another project to my portfolio. It's a project I worked on during the NLW Return, a Rocketseat event. The project is called DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-11-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mary Abbot",
      role: "UX designer",
    },
    content: [
      { type: "paragraph", content: "Hey folks!" },
      {
        type: "paragraph",
        content:
          "I finally completed my new website/portfolio. It was a huge challenge to create the entire design and code it from scratch, but I made it 💪🏻",
      },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2023-11-10 14:00:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
