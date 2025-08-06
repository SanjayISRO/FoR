import styles from './Sidebar.module.css'

import checkbox from '../../../assets/images/sidebar_checkbox.png';

const Sidebar = () => {
    return (
        <>
        <div className={styles.sidebar}>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
            <div>
            <img src={checkbox} alt="checkbox image" className={styles.image}/>
            </div>
        </div>
        </>
    )
}

export default Sidebar