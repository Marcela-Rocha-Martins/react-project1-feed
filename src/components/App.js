import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Post } from './Post.jsx';

import "./global.css";

import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header />

     <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post 
          author="marcela"
          content="Lorem Ipsum"
          />
        </main>
     </div>
    </div>
  );
}

export default App;
