import Image from 'next/image';
import React from 'react';
import styles from './burgerMenu.module.scss';
import Link from 'next/link';
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { userLogout } from "../../redux/features/auth/auth"

const BurgerMenu = ({ setOpen }: any) => {

    const router = useRouter();
    const dispatch = useDispatch();

    const logoutHandler = (e : any) => {
        e.preventDefault();
        Cookies.remove('userInfo');
        dispatch(userLogout());
        router.push('/login');
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.arrow_left}>
                    <Image
                        src="v1643303099/arrow-left_ufft0g.png"
                        alt='arrow-left'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <div className={styles.logo}>
                    <Image
                        src="v1643303041/Logo_pp9xei.png"
                        alt='logo'
                        layout='fill'
                    />
                </div>

                <div className={styles.close_burger}>
                    <Image
                        src="v1643303042/Cross_khak8l.png"
                        alt='close'
                        layout='fill'
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>

            <div className={styles.menu_container}>

                <div className={styles.avatar}>
                    <Image
                        src="v1643303089/user-avatar_uhwgwg.png"
                        alt='avatar'
                        layout='fill'
                    />
                </div>

                <nav className={styles.nav_links}>
                    <ul className={styles.links_list}>
                        <li >Home</li>
                        <li>My requests</li>
                        <li>My pick-ups</li>
                        <li>Settings</li>
                        <li onClick={logoutHandler}>Logout</li>
                    </ul>
                </nav>

                <Link href="/">
                    <a className={styles.btn_request}>
                        New request
                    </a>
                </Link>

                <a onClick={logoutHandler} className={styles.logout}>
                    Log out
                </a>

            </div>
        </div>
    );
};

export default BurgerMenu;
