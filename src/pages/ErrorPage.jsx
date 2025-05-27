
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 text-white/80">
        Page not found. The page you're looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
