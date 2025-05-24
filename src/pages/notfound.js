import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="not-found-page" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2rem"}}>
      <h1>Page Not Found</h1>

      <p>Sorry, this page couldn't be found. <a href="/">Return to home page</a></p>
    </div>
  );
}