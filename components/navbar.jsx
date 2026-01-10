import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaHome, FaComments, FaInfo, FaList, FaImages } from 'react-icons/fa'
// import { TiGlobe } from "react-icons/ti";
import { HiMenuAlt1 } from "react-icons/hi";
import AbbrLogo from '@/public/lei-logo-sm-100-nav.png'
import { Drawer, Button } from "antd";
import styles from '@/styles/navbar.module.scss'
import DarkModeSwitch from "./dark-switch";

export default function Navbar(darkModeFromTop, handleSwitchChangeFromTop){
    const path = usePathname();
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        document.body.style.overflow = "hidden";    //disable mobile scrolling
        setOpen(true);
    }

    const closeDrawer = () => {
        document.body.style.overflow = "auto";
        setOpen(false);
    }

    return(
        <nav className={styles.navbar} aria-label="main page navigation navbar">
            <Link href="/" className={styles.navLogo} aria-label="Home - Clickable Logo">
                <Image src={AbbrLogo} alt="lei-logo" width={50} height={50}/>
            </Link>
            <div className={styles.desktopNav}>
                <Link className={`${styles.navLink} ${path === '/' ? styles.nActive : ''}`} href="/">
                    Home
                </Link>
                <Link className={`${styles.navLink} ${path === '/services' ? styles.nActive : ''}`} href="/services">
                    Services
                </Link>
                <Link className={`${styles.navLink} ${path === '/portfolio' ? styles.nActive : ''}`} href="/portfolio">
                    Project Portfolio
                </Link>
                {/* <Link className={styles.navLink} href="/portfolio-map">
                <TiGlobe className={styles.mobileIcon} size={22}/>Interactive Portfolio
                </Link> */}
                <Link className={`${styles.navLink} ${path === '/about' ? styles.nActive : ''}`} href="/about">
                    About Us
                </Link>
                <Link className={`${styles.navLink} ${path === '/contact' ? styles.nActive : ''}`} href="/contact">
                    <FaComments className={styles.mobileIcon} size={22}/>Contact Us
                </Link>
                <div style={{display: 'inline-flex', flexDirection: 'column', width: 'fit-content', float: 'right'}}>
                    <DarkModeSwitch
                    checked={darkModeFromTop}
                    handleSwitchChange={handleSwitchChangeFromTop}/>
                </div>
                
            </div>

            <Button
            className={styles.mobileMenuBtn}
            type="primary"
            onClick={() => openDrawer()}
            ><HiMenuAlt1 size={30}/></Button>
            <Drawer
                placement="left"
                closeIcon
                open={open}
                onClose={() => closeDrawer()}
            >
                <nav className={styles.mobileNav}>
                <Link className={`${styles.navLink} ${path === '/' ? styles.nActive : ''}`} href="/"
                onClick={() => closeDrawer()}>
                    <FaHome className={styles.mobileIcon} size={22}/><span>Home</span>
                </Link>
                <Link className={`${styles.navLink} ${path === '/services' ? styles.nActive : ''}`} href="/services"
                onClick={() => closeDrawer()}>
                    <FaList className={styles.mobileIcon} size={22}/><span>Services</span>
                </Link>
                <Link className={`${styles.navLink} ${path === '/portfolio' ? styles.nActive : ''}`} href="/portfolio"
                onClick={() => closeDrawer()}>
                    <FaImages className={styles.mobileIcon} size={22}/><span>Project Portfolio</span>
                </Link>
                <Link className={`${styles.navLink} ${path === '/about' ? styles.nActive : ''}`} href="/about"
                onClick={() => closeDrawer()}>
                    <FaInfo className={styles.mobileIcon} size={22}/><span>About Us</span>
                </Link>
                <Link className={`${styles.navLink} ${path === '/contact' ? styles.nActive : ''}`} href="/contact"
                onClick={() => closeDrawer()}>
                    <FaComments className={styles.mobileIcon} size={22}/><span>Contact Us</span>
                </Link>
                </nav>
            </Drawer>
        </nav>
    )
}