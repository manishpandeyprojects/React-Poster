import { Link } from "react-router-dom";
import Modal from "./../components/Modal";

function Error() {
  return (
    <Modal>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="text-9xl mb-3 font-bold">404</h2>
          <p>Page doesn't exist!</p>
          <p className="mt-4">
            <Link to="/" className="text-blue-600">
              Return to homepage
            </Link>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default Error;
