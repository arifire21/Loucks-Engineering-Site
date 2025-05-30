import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaHome, FaComments, FaInfo, FaList, FaImages } from 'react-icons/fa'
import { TiGlobe } from "react-icons/ti";
import { HiMenuAlt1 } from "react-icons/hi";
import AbbrLogo from '@/images/logo_sm.png'
import { Drawer, Button } from "antd";
import styles from '@/styles/navbar.module.scss'

export default function Navbar(){
    const path = usePathname();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    return(
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navLogo}>
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
            </div>

            <Button
            className={styles.mobileMenuBtn}
            type="primary"
            onClick={() => showDrawer()}
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