import { Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';

let listElements = document.getElementsByTagName("li")
console.log(listElements)

for (let index = 0; index < listElements.length; index++) {
  let element = listElements[index];

  element.addEventListener("click", function(){
    console.log("eventlistener clicked")
    let prevTab = document.getElementsByClassName("active");
    prevTab[0].classList.remove("active");

    element.classList.add("active");
  });
}

// document.getElementsByTagName("li")[0].addEventListener("click", function(){
//       console.log("eventlistener clicked")
//       let prevTab = document.getElementsByClassName("active");
//       prevTab[0].classList.remove("active");
  
//       document.getElementsByTagName("li")[0].classList.add("active");
//     });

//     listElements[1].addEventListener("click", function(){
//       console.log("eventlistener clicked")
//       let prevTab = document.getElementsByClassName("active");
//       prevTab[0].classList.remove("active");
  
//       listElements[1].classList.add("active");
//     });

//     listElements[2].addEventListener("click", function(){
//       console.log("eventlistener clicked")
//       let prevTab = document.getElementsByClassName("active");
//       prevTab[0].classList.remove("active");
  
//       listElements[2].classList.add("active");
//     });

//     listElements[3].addEventListener("click", function(){
//       console.log("eventlistener clicked")
//       let prevTab = document.getElementsByClassName("active");
//       prevTab[0].classList.remove("active");
  
//       listElements[3].classList.add("active");
//     });

export default function NavBar() {
  return(
    <div>
      <header>
        {/* <Toolbar> */}
          {/* <nav */}
            {/* style={{display: "inline-block", width: "max-content"}}
          > */}
            {/* <Link to='/' className='nav-link'>Home</Link> |{" "}
            <Link to='/services' className='nav-link'>Services</Link> |{" "}
            <Link to='/portfolio' className='nav-link'>Project Portfolio</Link> |{" "}
            <Link to='/about' className='nav-link'>About Us</Link> |{" "}
            <Link to='/contact' className='nav-link'>Contact Us</Link> */}
          {/* </nav> */}
        {/* </Toolbar> */}

        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </header>
    </div>
  );
}