import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'> Home </Link>
        </li>
        <li className={styles.item}>
          <Link to='/company'> Company </Link>
        </li>
        <li className={styles.item}>
          <Link to='/contact'> Contact </Link>
        </li>
        <li className={styles.item}>
          <Link to='/newproject'> New Project </Link>
        </li>
      </ul>
    )
}

export default Navbar