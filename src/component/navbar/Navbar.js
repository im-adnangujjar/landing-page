
import styles from '../../../style/Navbar.module.css'
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../drawer/Drawer';

function Navbar() {

    return (
        <div>
            <div className={styles.display}>
           
                <div className={styles.logo}>LOGO</div>
            {/* <div className={styles.icon}> <MenuIcon /> </div> */}
            <TemporaryDrawer/>
            

                <ul className={styles.list}>
                    <li className={styles.listItem}>Courses</li>
                    <li className={styles.listItem}>How it works</li>
                    <li className={styles.listItem}>Meet our Mentors</li>
                    <li className={styles.listItem}>Online Events</li>
                    <li className={styles.listItem}>Blogs</li>
                    <li className={styles.listItem1}>Log In</li>
                </ul>
            </div>
            </div>
    
    )
}
export default Navbar
