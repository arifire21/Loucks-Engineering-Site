import { Switch, Tooltip } from "antd";
import { FaSun, FaMoon } from "react-icons/fa";
// import { MdAccessibleForward, MdNotAccessible } from "react-icons/md";
import { CgMenuMotion, CgMenu } from "react-icons/cg";
import styles from '@/styles/switch.module.scss';
// import { useState } from "react";

type DarkModeSwitchProps = {
    darkModeFromNav: boolean;
    handleSwitchChangeFromNav: (checked: boolean) => void;
};

type AccModeSwitchProps = {
    accModeFromNav: boolean;
    handleSwitchChangeFromNav: (checked: boolean) => void;
};

export function DarkModeSwitch({darkModeFromNav, handleSwitchChangeFromNav}:DarkModeSwitchProps){

    // console.log("Child received handleSwitchChangeFromNav:", handleSwitchChangeFromNav);

    return(
        <div style={{display: 'inline-block'}}>
            <Tooltip placement="top" title={darkModeFromNav ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow={true}>
                <FaSun className={styles.switchIcon} color={darkModeFromNav ? "#666666" : "#ffffff"}/>
                <Switch className={styles.switch}
                    checked={darkModeFromNav}
                    onChange={(event) => handleSwitchChangeFromNav(event)}/>
                <FaMoon className={styles.switchIcon} color={darkModeFromNav ? "#ffffff" : "#666666"}/>
            </Tooltip>
        </div>
    )
}

export function AccModeSwitch({accModeFromNav, handleSwitchChangeFromNav}:AccModeSwitchProps){

    // console.log("Child received handleSwitchChangeFromNav:", handleSwitchChangeFromNav);

    return(
        <div style={{display: 'inline-block'}}>
            <Tooltip placement="top" title={accModeFromNav ? "Animation Motion is: Default" : "Animation Motion is: Reduced"} arrow={true}>
                <CgMenu className={styles.switchIcon} color={accModeFromNav ? "#666666" : "#ffffff"}/>
                <Switch className={styles.switch}
                    checked={accModeFromNav}
                    onChange={(event) => handleSwitchChangeFromNav(event)}/>
                <CgMenuMotion className={styles.switchIcon} color={accModeFromNav ? "#ffffff" : "#666666"}/>
            </Tooltip>
        </div>
    )
}