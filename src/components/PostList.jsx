import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({ modalIsVisible, hideModalHandler }) => {
  const [posts, setPosts] = useState([]);

  function addNewPostHandler(data) {
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

      {posts.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-4 pt-4">
          {posts.map((item) => {
            return <Post key={item.body} author={item.author} body={item.body} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div className="text-center text-white mt-10">
          <h2 className="text-3xl mb-3 font-bold">There are not posts as yet</h2>
          <p>Add some posts to see!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
