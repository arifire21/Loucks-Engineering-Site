import Logo from '../images/logo_sm.png';

export default function NotFoundPage() {

  return (
    <div id="not-found-page" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2rem"}}>
      <img src={Logo} alt="LEI logo sm" width={100} height={100}/>
      <h1><span id="not-found-number">404</span> - Page Not Found</h1>

      <p>Sorry, the <span id="not-found-flavor">{window.location.pathname}</span> page couldn't be found. <a href="/">Return to home page</a></p>
    </div>
  );
}