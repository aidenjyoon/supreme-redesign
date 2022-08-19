import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Logo from "../components/layouts/logo/Logo";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="supremenewyork.com redesign" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Logo showTime={true} />

          <nav className={styles.menu}>
            <ul>
              <li>
                <Link href="/news">news</Link>
              </li>
              <li>
                <Link href="/lookbook">spring/summer 2022 lookbook</Link>
              </li>
              <li>
                <Link href="/shop">shop</Link>
              </li>
              <li>
                <Link href="/">videos</Link>
              </li>
              <li>
                <Link href="/">store locations</Link>
              </li>
              <li>
                <Link href="/">mailinglist</Link>
              </li>
              <li>
                <Link href="/tests/test">test</Link>
              </li>
              <li>
                <Link href="/tests/test2">test2</Link>
              </li>
              <li>
                <Link href="/tests/test3">producttile test3</Link>
              </li>
            </ul>

            <div className={styles.socials}>
              <Link href="/">facebook</Link>
              <Link href="/">instagram</Link>
              <Link href="/">weibo</Link>
              <Link href="/">itunes</Link>
            </div>
          </nav>
        </main>

        <footer className={styles.footer}>footer</footer>
      </div>
    </>
  );
};

export default HomePage;
