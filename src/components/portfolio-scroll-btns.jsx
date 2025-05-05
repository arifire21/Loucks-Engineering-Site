import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export function LeftScrollButton(portfolioContainerID){
    const [btnDisabledLeft, setDisabledLeft] = useState(false);

    function scrollLeft(portfolioContainerID){
        console.log(portfolioContainerID)
        const portfolioContainer = document.getElementById(portfolioContainerID);
        console.log(portfolioContainer)
    
        portfolioContainer.scrollLeft -= 20;
    
        if(portfolioContainer.scrollLeft === 0) {
            setDisabledLeft(true)
        }
    }

    return(
        <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
        onClick={() => scrollLeft(portfolioContainerID)}
        ><FaCaretLeft size={30}/></Button>
    )
}

export function RightScrollButton(portfolioContainerID){
    const [btnDisabledRight, setDisabledRight] = useState(false);

    function scrollRight(portfolioContainerID){
        const portfolioContainer = document.getElementById(portfolioContainerID);
    
        portfolioContainer.scrollRight += 20;
    
        if(portfolioContainer.scrollRight === portfolioContainer.scrollWidth) {
            setDisabledRight(true)
        }
    }

    return(
        <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
        onClick={() => scrollRight(portfolioContainerID)}
        ><FaCaretRight size={30}/></Button>
    )
}