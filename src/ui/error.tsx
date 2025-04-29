import { useNavigate, useRouteError } from "react-router-dom";

interface CustomError extends Error {
  data: string;
}

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError() as CustomError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <p>{error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
