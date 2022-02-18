import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Home.module.scss'

const Home = ({postData} : any) => {
  console.log(postData)
  return (
    <div className={styles.container}>

      <div>{postData}</div>

      <div className={styles.welcome_title}>Hey Rassem!</div>

      <p className={styles.description}>
        Dont be shy and ask for a drive
      </p>

      <div className={styles.buttons_container}>
        <Link href="/destination">
          <a className={styles.button_departure}>Departure</a>
        </Link>
        <Link href="/destination">
          <a className={styles.button_return}>Return</a>
        </Link>
      </div>
    </div>
  );
};


export default Home;