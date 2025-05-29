import Logo from "@/images/logo_sm.png"

export default function ErrorPage() {

  return (
    <div id="error-page" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2rem"}}>
      <img src={Logo.src} alt="LEI logo sm" width={100} height={100}/>
      <h1>App failed to compile!</h1>

      <p>Sorry, an unexpected error has occurred. <a href="/">Return to home page</a></p>
    </div>
  );
}