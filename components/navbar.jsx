import Link from "next/link";
import Image from "next/image";
import { FaHome, FaComments, FaInfo, FaList, FaImages } from 'react-icons/fa'
import { TiGlobe } from "react-icons/ti";
import AbbrLogo from '@/images/logo_sm.png'

import styles from '@/styles/navbar.module.scss'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navLogo}>
            <Image src={AbbrLogo} alt="lei-logo" width={50} height={50}/>
            </Link>
            <Link className={styles.navLink} href="/">
            <FaHome className={styles.mobileIcon} size={22}/>Home
            </Link>
            <Link className={styles.navLink} href="/services">
            <FaList className={styles.mobileIcon} size={22}/>Services
            </Link>
            <Link className={styles.navLink} href="/portfolio">
            <FaImages className={styles.mobileIcon} size={22}/>Project Portfolio
            </Link>
            {/* <Link className={styles.navLink} href="/portfolio-map">
            <TiGlobe className={styles.mobileIcon} size={22}/>Interactive Portfolio
            </Link> */}
            <Link className={styles.navLink} href="/about">
            <FaInfo className={styles.mobileIcon} size={22}/>About Us
            </Link>
            <Link className={styles.navLink} href="/contact">
            <FaComments className={styles.mobileIcon} size={22}/>Contact Us
            </Link>
        </nav>
    )
}