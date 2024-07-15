import { Link, Form, redirect } from "react-router-dom";

import Modal from "./../components/Modal";

function NewPost() {
  return (
    <Modal>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium leading-6 text-grey-900"
              >
                Body Text
              </label>
              <div className="mt-2">
                <textarea
                  id="body"
                  name="body"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                ></textarea>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="author"
                  className="block text-sm font-medium leading-6 text-grey-900"
                >
                  Author
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="author"
                  id="author"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link to=".." className="w-1/2 cursor-pointer">
                Cancel
              </Link>
              <button
                type="submit"
                className="w-1/2 flex justify-center rounded-md text-white bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-grey-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Post created successfully");
    return redirect("/");
  } else {
    const error = await response.text();
    console.error("Failed to create post:", error);
    return { error: "Failed to create post" };
  }
}
