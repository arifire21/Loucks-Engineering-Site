import { Drawer, Button } from "antd";
import { useState } from "react";

export function PortfolioNavDesktop() {

    function customScroll(id){
        console.log(id)
        let element = document.getElementById(id)
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    return(
        <div id='portfolio-nav-desktop'>
            <h4>Jump to:</h4>
            <div  style={{display:'flex', flexWrap:'wrap'}}>
                <div className='portfolio-nav-item' onClick={() => customScroll('dining')}>Dining</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('offices')}>Offices</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('worship')}>Worship</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('aviation')}>Aviation</div>&ensp;<b>|</b>&ensp;
                <div className='portfolio-nav-item' onClick={() => customScroll('cleanrooms')}>Manufacturing/Compounding Cleanrooms</div>&ensp;<b>|</b>&ensp;
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
                <Button variant="filled" type="primary" style={{width: '100px', margin: 'auto'}}
                onClick={handleShow}>Jump to Section</Button>
            </div>

            <Drawer closeIcon open={show} onClose={handleClose} placement="top" title="Jump to..." keyboard={false} className='portfolio-offc'>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div className='portfolio-nav-item' onClick={() => customScroll('dining')}>Dining</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('offices')}>Offices</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('worship')}>Worship</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('aviation')}>Aviation</div>
                        <div className='portfolio-nav-item' onClick={() => customScroll('cleanrooms')}>Manufacturing/Compounding Cleanrooms</div>
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
                </Drawer>
        </div>
    )
}