import { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({ modalIsVisible, hideModalHandler }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addNewPostHandler(data) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPost) => [data, ...existingPost]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal closeModal={hideModalHandler}>
          <NewPost
            closeModal={hideModalHandler}
            onPostSubmit={addNewPostHandler}
          />
        </Modal>
      )}

      {!isFetching && posts.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-4 pt-4">
          {posts.map((item) => {
            return (
              <Post key={item.body} author={item.author} body={item.body} />
            );
          })}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div className="text-center text-white mt-10">
          <h2 className="text-3xl mb-3 font-bold">
            There are not posts as yet
          </h2>
          <p>Add some posts to see!</p>
        </div>
      )}

      {isFetching && (
        <div className="text-center text-white mt-10">
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
