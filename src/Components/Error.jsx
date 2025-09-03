import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1> Warning: {error.message}</h1>
      <h2>
        {error.status} - {error.statusText}
      </h2>
    </div>
  );
}

export default Error;
