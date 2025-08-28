import { Drawer, Button } from "antd";
import { useState } from "react";
import styles from "@/styles/portfolio.module.scss"

export function PortfolioNavDesktop() {

    function customScroll(id){
        console.log(id)
        let element = document.getElementById(id)
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    return(
        <nav id='portfolio-nav-desktop' aria-label="sticky portfolio navigation, jump to portfolio section">
            <h4>Jump to:</h4>
            <div  style={{display:'flex', flexWrap:'wrap'}}>
                <div className={styles.portfolioNavItem} onClick={() => customScroll('dining')}>Dining</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('offices')}>Offices</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('worship')}>Worship</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('aviation')}>Aviation</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('cleanrooms')}>Manufacturing/Compounding Cleanrooms</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('outreach')}>Outreach</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('storage')}>Storage</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('gyms')}>Gyms</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('med-dent')}>Medical & Dental</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('beauty')}>Beauty</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('retail')}>Retail</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('education')}>Education</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('supermarkets')}>Supermarkets</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('laundry')}>Laundry</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('auto')}>Automotive</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('pets')}>Pet Care</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('residences')}>Residences</div>&ensp;<b>|</b>&ensp;
                <div className={styles.portfolioNavItem} onClick={() => customScroll('other')}>Other Notable Projects</div>
            </div>
        </nav>
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
        element.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    return (
        <div id='portfolio-nav-mobile'>
            <div className="sticky-btn">
                <Button variant="filled" type="primary" style={{width: '100px', margin: 'auto'}}
                aria-label="sticky portfolio navigation, jump to portfolio section button"
                onClick={handleShow}>Jump to Section</Button>
            </div>

            <Drawer closeIcon open={show} onClose={handleClose} placement="top" title="Jump to..." keyboard={false} className='portfolio-offc'>
                    <nav style={{display:'flex', flexDirection:'column'}} aria-label="secondary navigation, menu for jumping to portfolio">
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('dining')}>Dining</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('offices')}>Offices</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('worship')}>Worship</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('aviation')}>Aviation</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('cleanrooms')}>Manufacturing/Compounding Cleanrooms</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('outreach')}>Outreach</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('storage')}>Storage</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('gyms')}>Gyms</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('med-dent')}>Medical & Dental</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('beauty')}>Beauty</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('retail')}>Retail</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('education')}>Education</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('supermarkets')}>Supermarkets</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('laundry')}>Laundry</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('auto')}>Automotive</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('pets')}>Pet Care</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('residences')}>Residences</div>
                        <div className={styles.portfolioNavItem} onClick={() => customScroll('other')}>Other Notable Projects</div>
                    </nav>
                </Drawer>
        </div>
    )
}