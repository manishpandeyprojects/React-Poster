import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-4 pt-4">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                body={post.body}
              />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div className="text-center text-white mt-10">
          <h2 className="text-3xl mb-3 font-bold">
            There are not posts as yet
          </h2>
          <p>Add some posts to see!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
