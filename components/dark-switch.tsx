import { Switch, Tooltip } from "antd";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from '@/styles/switch.module.scss';
// import { useState } from "react";

type DarkModeSwitchProps = {
    darkModeFromNav: boolean;
    handleSwitchChangeFromNav: (checked: boolean) => void;
  };

export default function DarkModeSwitch({darkModeFromNav, handleSwitchChangeFromNav}:DarkModeSwitchProps){

    // console.log("Child received handleSwitchChangeFromNav:", handleSwitchChangeFromNav);

    return(
        <div style={{display: 'inline-block'}}>
            <Tooltip placement="top" title={darkModeFromNav ? "switch to Light Mode" : "switch to Dark Mode"} arrow={true}>
                <FaSun className={styles.switchIcon} color={darkModeFromNav ? "#666666" : "#ffffff"}/>
                <Switch className={styles.switch}
                    checked={darkModeFromNav}
                    onChange={(event) => handleSwitchChangeFromNav(event)}/>
                <FaMoon className={styles.switchIcon} color={darkModeFromNav ? "#ffffff" : "#666666"}/>
            </Tooltip>
        </div>
    )
}