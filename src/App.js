import { Outlet, useLoaderData } from "react-router-dom";
import PostList from './components/PostList';

function App() {
  const postData = useLoaderData();
  return (
    <>
      <Outlet />
      <div className="bg-indigo-700 min-h-screen">
        <PostList posts={postData} />
      </div>
    </>
  );
}

export default App;

export async function LoadPosts() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}