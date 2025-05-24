import { useRouteError } from "react-router-dom";
import Logo from '../images/logo_sm.png';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2rem"}}>
      <img src={Logo} alt="LEI logo sm" width={100} height={100}/>
      <h1>{error.status ?? 'React failed to compile!'}</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Sorry, an unexpected error has occurred. <a href="/">Return to home page</a></p>
    </div>
  );
}