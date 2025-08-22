import Logo from '@/public/lei-logo-sm-100.png';
import { useEffect, useState } from 'react';

export default function NotFoundPage() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    setPage(window.location.pathname);
  }, []);


  return (
    <div id="not-found-page" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2rem"}}>
      <img src={Logo.src} alt="LEI logo sm" width={100} height={100}/>
      <h1><span id="not-found-number">404</span> - Page Not Found</h1>

      <p>Sorry, the <span id="not-found-flavor">{page}</span> page couldn't be found.</p>
    </div>
  );
}