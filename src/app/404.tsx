// pages/404.js
import Link from 'next/link';
import styles from '../styles/404.module.css';
import HomeKnop from "@/pages/components/homeKnop";

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Oops! The page you are looking for does not exist.</p>
            <HomeKnop data={{hrefInp: "/"}}/>
        </div>
    );
};
export default NotFoundPage;
