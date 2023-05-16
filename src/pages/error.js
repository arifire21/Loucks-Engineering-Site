import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>{error.status}</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Sorry, an unexpected error has occurred. <a href="/">Return to home page</a></p>
    </div>
  );
}