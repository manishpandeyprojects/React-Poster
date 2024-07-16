import { useLoaderData } from "react-router-dom";

import Modal from "./../components/Modal";

function PostDetails() {
  const postData = useLoaderData();
  return (
    <Modal>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-3xl mb-3 font-bold">{postData.author}</h2>
          <p>{postData.body}</p>
        </div>
      </div>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}
