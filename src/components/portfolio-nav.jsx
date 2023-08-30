import { Offcanvas, Button } from "react-bootstrap"
import { useState } from "react";

export function PortfolioNavDesktop() {

    // useEffect(() => {
    //     const observer = new IntersectionObserver( 
    //         ([e]) => e.target.classList.toggle('stuck', e.intersectionRatio < 49),
    //         {threshold: [1]}
    //     );

    //     console.log('stuck now')
    
    //     observer.observe(document.getElementById('portfolio-nav-desktop'));
    // }, [])


    function customScroll(id){
        console.log(id)
        let element = document.getElementById(id)
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }

    return(
        <div id='portfolio-nav-desktop'>
            <h4>Jump to:</h4>
            <div  style={{display:'flex', flexWrap:'wrap'}}>
                <div className='portfolio-nav-item' onClick={() => customScroll('dining')}>Dining</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('worship')}>Worship</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('offices')}>Offices</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('aviation')}>Aviation</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('outreach')}>Outreach</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('storage')}>Storage</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('gyms')}>Gyms</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('med-dent')}>Medical & Dental</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('beauty')}>Beauty</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('retail')}>Retail</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('education')}>Education</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('supermarkets')}>Supermarkets</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('laundry')}>Laundry</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('auto')}>Automotive</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('pets')}>Pet Care</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('residences')}>Residences</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('other')}>Other Notable Projects</div>
            </div>
        </div>
    )
}

export function PortfolioNavMobile() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    function customScroll(id){
        console.log(id)
        let element = document.getElementById(id)
        handleClose()
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }

    return (
        <div  id='portfolio-nav-mobile'>
            <div className="sticky-btn">
                <Button variant="danger" onClick={handleShow}>Jump to Section</Button>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement="top" className='portfolio-offc'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Jump to...</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div className='portfolio-nav-item' onClick={() => customScroll('dining')}>Dining</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('worship')}>Worship</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('offices')}>Offices</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('aviation')}>Aviation</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('outreach')}>Outreach</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('storage')}>Storage</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('gyms')}>Gyms</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('med-dent')}>Medical & Dental</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('beauty')}>Beauty</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('retail')}>Retail</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('education')}>Education</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('supermarkets')}>Supermarkets</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('laundry')}>Laundry</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('auto')}>Automotive</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('pets')}>Pet Care</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('residences')}>Residences</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('other')}>Other Notable Projects</div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}