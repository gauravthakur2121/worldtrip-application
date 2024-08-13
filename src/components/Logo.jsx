import { Link } from "react-router-dom";
  import styles from "./Logo.module.css"; 
 /*import { FaCarSide } from "react-icons/fa6"; */

function Logo() {
  return (
    <Link to="/">

     <img src="/logo-wt-2.png" alt="WorldWise logo" className={styles.logo} /> 
    
    </Link>
  );
}

export default Logo;
