import { Switch, Tooltip } from "antd";
import { MdAccessibleForward, MdNotAccessible } from "react-icons/md";
import styles from '@/styles/switch.module.scss';

export default function AccessibilitySwitch(){
    return(
        <div style={{display: 'inline-block'}}>
            <Tooltip placement="bottom" title={"Accessibility/Reduced Motion"} arrow={true}>
                <MdNotAccessible className={styles.switchIcon}/>
                <Switch className={styles.switch}/>
                <MdAccessibleForward className={styles.switchIcon}/>
            </Tooltip>
        </div>
    )
}