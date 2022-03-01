import PostCreate from "./PostCreate"
import PostList from "./PostList"
const App=()=>{
  return <div className="container">
    <h2>create Post</h2>
    <PostCreate />
    <hr />
    <h1>Posts list</h1>
    <PostList />
    </div>
}

export default App